package com.locatellilucas.teachgram.dto.req.user;

public record UserPatchDTOReq(String name, String username, String bio, String phone, String email, String password, String profileLink) {
}
