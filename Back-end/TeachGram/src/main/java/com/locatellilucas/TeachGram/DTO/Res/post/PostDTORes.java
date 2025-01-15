package com.locatellilucas.teachgram.dto.res.post;

import com.locatellilucas.teachgram.entities.Post;
import com.locatellilucas.teachgram.entities.User;
import com.locatellilucas.teachgram.entities.UserLike;

import java.time.Instant;
import java.util.List;

public record PostDTORes(Long id, boolean deleted, String description, String photoLink, int numLikes,
                         User user, Instant createdAt, List<UserLike> userLikes) {

    public static PostDTORes postToDto(Post post) {
        return new PostDTORes(post.getId(), post.isDeleted(), post.getDescription(), post.getPhotoLink(), post.getNumLikes(), post.getUser(),
                post.getCreatedAt(), post.getUserLikes());
    }

}
