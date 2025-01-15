package com.locatellilucas.teachgram.dto.req.post;

public record PostPatchDTOReq(String description, String photoLink, int numLikes, boolean privatePost) {
}
