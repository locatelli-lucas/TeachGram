package com.locatellilucas.teachgram.dto.res.follow;

import com.locatellilucas.teachgram.entities.Follow;
import com.locatellilucas.teachgram.entities.User;

public record FollowDTORes(Long id, Long followerId, Long followedId) {

    public static FollowDTORes followToDTO(Follow follow) { return new FollowDTORes(follow.getId(), follow.getFollower().getId(), follow.getFollowed().getId()); }

}

