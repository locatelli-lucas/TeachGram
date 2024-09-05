package com.locatellilucas.TeachGram.Controllers;

import com.locatellilucas.TeachGram.DTO.Req.post.PostDTOReq;
import com.locatellilucas.TeachGram.DTO.Req.post.PostPatchDTOReq;
import com.locatellilucas.TeachGram.DTO.Res.post.PostDTORes;
import com.locatellilucas.TeachGram.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseEntity<PostDTORes> create(@RequestBody PostDTOReq body, UriComponentsBuilder uriBuilder) {
        PostDTORes post = this.postService.create(body);
        URI uri = uriBuilder.path("/posts/{id}").buildAndExpand(post.id()).toUri();
        return ResponseEntity.created(uri).body(post);
    }

    @GetMapping
    public ResponseEntity<List<PostDTORes>> findAll() {
        List<PostDTORes> posts = this.postService.findAll();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDTORes> findById(@PathVariable Long id) {
        PostDTORes post = this.postService.findById(id);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostDTORes> update(@PathVariable Long id, @RequestBody PostDTOReq postDTOReq) {
        PostDTORes post = this.postService.update(id, postDTOReq);
        return ResponseEntity.ok(post);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<PostDTORes> patch(@PathVariable Long id, @RequestBody PostPatchDTOReq updates) {
        PostDTORes post = this.postService.patch(id, updates);
        return ResponseEntity.ok(post);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PostDTOReq> delete(@PathVariable Long id) {
        this.postService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteAllByUserId(@PathVariable Long userId) {
        this.postService.deleteAllByUserId(userId);
        return ResponseEntity.noContent().build();
    }
}
