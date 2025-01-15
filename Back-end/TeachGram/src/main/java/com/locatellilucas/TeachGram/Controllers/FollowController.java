package com.locatellilucas.teachgram.controllers;

import com.locatellilucas.teachgram.dto.req.follow.FollowDTOReq;
import com.locatellilucas.teachgram.dto.res.follow.FollowDTORes;
import com.locatellilucas.teachgram.services.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class FollowController {

    @Autowired
    private FollowService followService;

    @PostMapping("/follow")
    public ResponseEntity<FollowDTORes> createFollow(@RequestBody FollowDTOReq followDTOReq) {
        FollowDTORes response = this.followService.createFollow(followDTOReq);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/following")
    public ResponseEntity<List<FollowDTORes>> getFollowsByUserId(@PathVariable Long id, @RequestParam int page, @RequestParam int size) {
        List<FollowDTORes> list = this.followService.getFollowsByUserId(id, page, size);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}/followers")
    public ResponseEntity<List<FollowDTORes>> getFollowersByUserId(@PathVariable Long id, @RequestParam int page, @RequestParam int size) {
        List<FollowDTORes> follows = this.followService.getFollowersByUserId(id, page, size);
        return ResponseEntity.ok(follows);
    }

    @GetMapping("/{id}/follows")
    public ResponseEntity<List<FollowDTORes>> getAllUserFollows(@PathVariable Long id, @RequestParam int page, @RequestParam int size) {
        List<FollowDTORes> follows = this.followService.getAllUserFollows(id, page, size);
        return ResponseEntity.ok(follows);
    }

    @DeleteMapping("/{followerId}/unfollow/{followedId}")
    public ResponseEntity<Void> deleteFollower(@PathVariable Long followerId, @PathVariable Long followedId, @RequestParam int page, @RequestParam int size) {
        this.followService.deleteFollow(followerId, followedId, page, size);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}/follows")
    public ResponseEntity<Void> deleteAllFollowsByUserId(@PathVariable Long id) {
        this.followService.deleteAllFollowsByUserId(id);
        return ResponseEntity.noContent().build();
    }

}