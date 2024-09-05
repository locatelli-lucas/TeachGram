package com.locatellilucas.TeachGram.DTO.Req.post;

import com.locatellilucas.TeachGram.Entities.Post;
import com.locatellilucas.TeachGram.Entities.User;

public record PostDTOReq(String description, User user, String photoLink) {
    public Post dtoToPost() {
        return new Post(this.description, this.user, this.photoLink);
    }
    public Post dtoToPost(Long id) {
        return new Post(id, this.description, this.user, this.photoLink);
    }

    public static boolean isValid(PostDTOReq postDTOReq) {
        return postDTOReq.photoLink != null && postDTOReq.description != null && postDTOReq.user != null;
    }
}
