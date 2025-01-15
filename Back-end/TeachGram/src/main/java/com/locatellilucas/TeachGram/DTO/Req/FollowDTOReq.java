package com.locatellilucas.teachgram.dto.req;

import com.locatellilucas.teachgram.entities.Follow;
import com.locatellilucas.teachgram.entities.User;

public record FollowDTOReq(User follower, User followed) {
    public Follow dtoToUser() { return new Follow(this.follower, this.followed); }
}
