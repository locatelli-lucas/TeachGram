package com.locatellilucas.TeachGram.Services;

import com.locatellilucas.TeachGram.DTO.Req.user.UserDTOReq;
import com.locatellilucas.TeachGram.DTO.Req.user.UserPatchDTOReq;
import com.locatellilucas.TeachGram.DTO.Res.user.UserDTORes;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Exceptions.BadRequestException;
import com.locatellilucas.TeachGram.Exceptions.EntityNotFoundException;
import com.locatellilucas.TeachGram.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTORes create(UserDTOReq userDTOReq) {
        if(userDTOReq == null ||
                !UserDTOReq.isValid(userDTOReq)) throw new BadRequestException("Invalid user data provided");

        User user = this.userRepository.save(userDTOReq.dtoToUser());
        System.out.println(user);
        return UserDTORes.userToDto(user);
    }

    public List<UserDTORes> findAll() {
        List<User> list = this.userRepository.findAll();
        list.forEach(System.out::println);
        return list.stream().map(UserDTORes::userToDto).toList();
    }

    public UserDTORes findById(Long id) {
        User user = this.findByIdEntity(id);
        System.out.println(user);
        return UserDTORes.userToDto(user);
    }

    public UserDTORes update(Long id, UserDTOReq userDTOReq) {
        if(userDTOReq == null || !UserDTOReq.isValid(userDTOReq)) throw new BadRequestException("Invalid user data provided");

        User user = this.userRepository.save(userDTOReq.dtoToUser(id));
        System.out.println(user);
        return UserDTORes.userToDto(user);
    }

    public UserDTORes patch(Long id, UserPatchDTOReq updates) {
        if(updates == null) throw new BadRequestException("Invalid user data provided");

        User user = findByIdEntity(id);

        if (!Objects.equals(updates.name(), "")) user.setName(updates.name());
        if (!Objects.equals(updates.userName(), "")) user.setUserName(updates.userName());
        if (!Objects.equals(updates.bio(), "")) user.setBio(updates.bio());
        if (!Objects.equals(updates.phone(), "")) user.setPhone(updates.phone());
        if (!Objects.equals(updates.email(), "")) user.setEmail(updates.email());
        if (!Objects.equals(updates.password(), "")) user.setPassword(updates.password());
        if (!Objects.equals(updates.profileLink(), "")) user.setProfileLink(updates.profileLink());

        this.userRepository.save(user);
        System.out.println(user);
        return UserDTORes.userToDto(user);
    }

    public void delete(Long id) {
        User user = findByIdEntity(id);
        this.userRepository.delete(user);
    }

    public User findByIdEntity(Long id) {
        return this.userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }


}
