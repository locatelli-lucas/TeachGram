package com.locatellilucas.teachgram.dto.res.user;

import com.locatellilucas.teachgram.entities.*;

import java.util.List;

public record UserDTORes(Long id, String name, String username, String bio, String phone, String email, String password, String profileLink,
                         List<Post> posts, List<Follow> follows) {

    public static UserDTORes userToDto(User user) {

        return new UserDTORes(user.getId(), user.getName(), user.getUsername(), user.getBio(), user.getPhone(), user.getEmail(), user.getPassword()
                , user.getProfileLink(), user.getPosts(), user.getFollows());
    }


}
