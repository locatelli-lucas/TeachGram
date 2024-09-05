package com.locatellilucas.TeachGram.DTO.Res.post;

import com.locatellilucas.TeachGram.Entities.Post;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Entities.UserLike;

import java.time.Instant;
import java.util.List;

public record PostDTORes(Long id, boolean deleted, String description, String photoLink, int numLikes,
                         User user, Instant createdAt, List<UserLike> userLikes) {

    public static PostDTORes postToDto(Post post) {
        return new PostDTORes(post.getId(), post.isDeleted(), post.getDescription(), post.getPhotoLink(), post.getNumLikes(), post.getUser(),
                post.getCreatedAt(), post.getUserLikes());
    }

}
