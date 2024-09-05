package com.locatellilucas.TeachGram.Controllers;

import com.locatellilucas.TeachGram.DTO.Res.follow.FollowDTORes;
import com.locatellilucas.TeachGram.Entities.Follow;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Services.FollowService;
import com.locatellilucas.TeachGram.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class FollowController {

    @Autowired
    private UserService userService;

    @Autowired
    private FollowService followService;

    @PostMapping("/{followerId}/follow/{followedId}")
    public ResponseEntity<Follow> createFollow(@PathVariable Long followerId, @PathVariable Long followedId) {
        User follower = userService.findByIdEntity(followerId);
        User followed = userService.findByIdEntity(followedId);
        Follow responseFollow = this.followService.createFollow(follower, followed);
        return ResponseEntity.ok(responseFollow);
    }

    @GetMapping("/{id}/following")
    public ResponseEntity<List<FollowDTORes>> getFollowsByUserId(@PathVariable Long id) {
        List<FollowDTORes> list = this.followService.getFollowsByUserId(id);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}/followers")
    public ResponseEntity<List<Follow>> getFollowersByUserId(@PathVariable Long id) {
        List<Follow> follows = this.followService.getFollowersByUserId(id);
        return ResponseEntity.ok(follows);
    }

    @GetMapping("/{id}/follows")
    public ResponseEntity<List<Follow>> getAllUserFollows(@PathVariable Long id) {
        List<Follow> follows = this.followService.getAllUserFollows(id);
        return ResponseEntity.ok(follows);
    }

    @DeleteMapping("/{followerId}/unfollow/{followedId}")
    public ResponseEntity<Void> deleteFollower(@PathVariable Long followerId, @PathVariable Long followedId) {
        this.followService.deleteFollow(followerId, followedId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}/follows")
    public ResponseEntity<Void> deleteAllFollowsByUserId(@PathVariable Long id) {
        this.followService.deleteAllFollowsByUserId(id);
        return ResponseEntity.noContent().build();
    }

}
