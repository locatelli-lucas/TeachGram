package com.locatellilucas.teachgram.dto.req.user;

import com.locatellilucas.teachgram.domain.Role;
import com.locatellilucas.teachgram.entities.User;

import java.util.ArrayList;
import java.util.List;

public record UserDTOReq(String name, String username, String bio, String phone, String email, String password, String profileLink,
                         Role role) {

    public User dtoToUser() {
        List<Role> roles = List.of(role);
        return new User(this.name, this.username, this.bio, this.phone, this.email, this.password, this.profileLink, roles);
    }

    public User dtoToUser(Long id) {
        List<Role> roles = List.of(role);
        return new User(id, this.name, this.username, this.bio, this.phone, this.email, this.password, this.profileLink, roles);
    }

    public static boolean isValid(UserDTOReq userDTOReq) {
        return userDTOReq.name != null &&
                userDTOReq.username!= null &&
                userDTOReq.phone != null &&
                userDTOReq.email != null &&
                userDTOReq.password != null &&
                userDTOReq.profileLink != null &&
                userDTOReq.role != null;

    }


}
