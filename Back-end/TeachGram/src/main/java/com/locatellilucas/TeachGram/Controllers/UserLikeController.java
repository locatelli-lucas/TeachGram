package com.locatellilucas.TeachGram.Controllers;

import com.locatellilucas.TeachGram.DTO.Res.follow.FollowDTORes;
import com.locatellilucas.TeachGram.Entities.Follow;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Entities.UserLike;
import com.locatellilucas.TeachGram.Services.FollowService;
import com.locatellilucas.TeachGram.Services.UserLikeService;
import com.locatellilucas.TeachGram.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class UserLikeController {

    @Autowired
    private UserLikeService userLikeService;

    @PostMapping("/likes")
    public ResponseEntity<UserLike> createUserLike(@RequestBody UserLike userLike){
        UserLike response = this.userLikeService.createUserLike(userLike.getUser().getId(), userLike.getPost().getId());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/likes")
    public ResponseEntity<List<UserLike>> getAllUserLikes() {
        List<UserLike> response = this.userLikeService.getAllUserLikes();
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/likes/{id}")
    public ResponseEntity<UserLike> deleteUserLike(@PathVariable Long id) {
        this.userLikeService.deleteUserLike(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/likes/post/{id}")
    public ResponseEntity<Void> deleteAllByPostId(@PathVariable Long id) {
        this.userLikeService.deleteAllByPostId(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/likes/user/{id}")
    public ResponseEntity<Void> deleteAllByUserId(@PathVariable Long id) {
        this.userLikeService.deleteAllByUserId(id);
        return ResponseEntity.noContent().build();
    }
}
