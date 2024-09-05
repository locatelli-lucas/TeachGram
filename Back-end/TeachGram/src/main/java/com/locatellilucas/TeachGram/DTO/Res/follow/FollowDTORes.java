package com.locatellilucas.TeachGram.DTO.Res.follow;

import com.locatellilucas.TeachGram.Entities.Follow;
import com.locatellilucas.TeachGram.Entities.User;

public record FollowDTORes(Long id, User follower) {

    public static FollowDTORes followToDTOFollower(Follow follow) {
        return new FollowDTORes(follow.getId(), follow.getFollower());
    }

    public static FollowDTORes followToDTOFollowing(Follow follow) {
        return new FollowDTORes(follow.getId(), follow.getFollowed());
    }
}
