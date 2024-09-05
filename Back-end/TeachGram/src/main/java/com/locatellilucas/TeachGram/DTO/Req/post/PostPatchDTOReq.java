package com.locatellilucas.TeachGram.DTO.Req.post;

public record PostPatchDTOReq(String description, String photoLink, int numLikes, boolean privatePost) {
}
