package com.locatellilucas.TeachGram.DTO.Req.user;

import com.locatellilucas.TeachGram.Entities.User;

public record UserDTOReq(String name, String userName, String bio, String phone, String email, String password, String profileLink) {

    public User dtoToUser() {
        return new User(this.name, this.userName, this.bio, this.phone, this.email, this.password, this.profileLink);
    }

    public User dtoToUser(Long id) {
        return new User(id, this.name, this.userName, this.bio, this.phone, this.email, this.password, this.profileLink);
    }

    public static boolean isValid(UserDTOReq userDTOReq) {
        return userDTOReq.name != null &&
                userDTOReq.userName!= null &&
                userDTOReq.phone != null &&
                userDTOReq.email != null &&
                userDTOReq.password != null &&
                userDTOReq.profileLink != null;
    }
}
