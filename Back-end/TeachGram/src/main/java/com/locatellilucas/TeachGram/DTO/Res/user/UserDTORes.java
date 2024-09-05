package com.locatellilucas.TeachGram.DTO.Res.user;

import com.locatellilucas.TeachGram.Entities.*;

import java.util.List;

public record UserDTORes(Long id, String name, String userName, String bio, String phone, String email, String password, String profileLink,
                         List<Post> posts, List<Follow> follows) {

    public static UserDTORes userToDto(User user) {

        return new UserDTORes(user.getId(), user.getName(), user.getUserName(), user.getBio(), user.getPhone(), user.getEmail(), user.getPassword()
                , user.getProfileLink(), user.getPosts(), user.getFollows());
    }


}
