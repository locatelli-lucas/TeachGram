package com.locatellilucas.teachgram.controllers;

import com.locatellilucas.teachgram.entities.UserLike;
import com.locatellilucas.teachgram.services.UserLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    public ResponseEntity<Page<UserLike>> getAllUserLikes(@RequestParam int page, @RequestParam int size) {
        Page<UserLike> response = this.userLikeService.getAllUserLikes(page, size);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/likes/{id}")
    public ResponseEntity<UserLike> deleteUserLike(@PathVariable Long id) {
        this.userLikeService.deleteUserLike(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/likes/post/{id}")
    public ResponseEntity<Void> deleteAllByPostId(@PathVariable Long id, @RequestParam int page, @RequestParam int size) {
        this.userLikeService.deleteAllByPostId(id, page, size);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/likes/user/{id}")
    public ResponseEntity<Void> deleteAllByUserId(@PathVariable Long id, @RequestParam int page, @RequestParam int size) {
        this.userLikeService.deleteAllByUserId(id, page, size);
        return ResponseEntity.noContent().build();
    }
}
