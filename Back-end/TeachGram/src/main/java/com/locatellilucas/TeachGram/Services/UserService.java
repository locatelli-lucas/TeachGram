package com.locatellilucas.teachgram.services;

import com.locatellilucas.teachgram.dto.req.login.LoginDTOReq;
import com.locatellilucas.teachgram.dto.req.user.UserDTOReq;
import com.locatellilucas.teachgram.dto.req.user.UserPatchDTOReq;
import com.locatellilucas.teachgram.dto.res.login.LoginDTORes;
import com.locatellilucas.teachgram.dto.res.user.UserDTORes;
import com.locatellilucas.teachgram.entities.User;
import com.locatellilucas.teachgram.exceptions.BadRequestException;
import com.locatellilucas.teachgram.exceptions.EntityNotFoundException;
import com.locatellilucas.teachgram.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public UserDTORes create(UserDTOReq userDTOReq) {
        if(userDTOReq == null ||
                !UserDTOReq.isValid(userDTOReq)) throw new BadRequestException("Invalid user data provided");

        String encodedPassword = passwordEncoder.encode(userDTOReq.password());

        User user = userDTOReq.dtoToUser();
        user.setPassword(encodedPassword);

        this.userRepository.save(user);
        return UserDTORes.userToDto(user);
    }

    public Page<UserDTORes> findAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> list = this.userRepository.findAll(pageable);
        return list.map(UserDTORes::userToDto);
    }

    public UserDTORes findById(Long id) {
        User user = this.findByIdEntity(id);
        return UserDTORes.userToDto(user);
    }

    public UserDTORes update(Long id, UserDTOReq userDTOReq) {
        if(userDTOReq == null || !UserDTOReq.isValid(userDTOReq)) throw new BadRequestException("Invalid user data provided");

        User user = this.userRepository.save(userDTOReq.dtoToUser(id));
        return UserDTORes.userToDto(user);
    }

    public UserDTORes patch(Long id, UserPatchDTOReq updates) {
        if(updates == null) throw new BadRequestException("Invalid user data provided");

        User user = findByIdEntity(id);

        if (!Objects.equals(updates.name(), "")) user.setName(updates.name());
        if (!Objects.equals(updates.username(), "")) user.setUsername(updates.username());
        if (!Objects.equals(updates.bio(), "")) user.setBio(updates.bio());
        if (!Objects.equals(updates.phone(), "")) user.setPhone(updates.phone());
        if (!Objects.equals(updates.email(), "")) user.setEmail(updates.email());
        if (!Objects.equals(updates.password(), "")) user.setPassword(updates.password());
        if (!Objects.equals(updates.profileLink(), "")) user.setProfileLink(updates.profileLink());

        this.userRepository.save(user);
        return UserDTORes.userToDto(user);
    }

    public void delete(Long id) {
        User user = findByIdEntity(id);
        this.userRepository.delete(user);
    }

    public User findByIdEntity(Long id) {
        return this.userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }

    public LoginDTORes login(LoginDTOReq loginDTOReq) {
        if(loginDTOReq.userName() == null) throw new RuntimeException("Username is required");
        if(loginDTOReq.password() == null) throw new RuntimeException("Password is required");
        if(loginDTOReq.userName().isEmpty()) throw new RuntimeException("Username is required");
        if(loginDTOReq.password().isEmpty()) throw new RuntimeException("Password is required");

        Optional<User> user = this.userRepository.findByUsername(loginDTOReq.userName());

        if(user.isEmpty()) throw new EntityNotFoundException("User with name " + loginDTOReq.userName() + " not found");

        User newUser = user.get();

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTOReq.userName(), loginDTOReq.password());
        authenticationManager.authenticate(token);

        return tokenService.generateToken(newUser);

    }

}
