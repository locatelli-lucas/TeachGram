package com.locatellilucas.TeachGram.Controllers;

import com.locatellilucas.TeachGram.DTO.Req.user.UserDTOReq;
import com.locatellilucas.TeachGram.DTO.Req.user.UserPatchDTOReq;
import com.locatellilucas.TeachGram.DTO.Res.user.UserDTORes;
import com.locatellilucas.TeachGram.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTORes> create(@RequestBody UserDTOReq body, UriComponentsBuilder uriBuilder) {
        UserDTORes user = this.userService.create(body);
        URI uri = uriBuilder.path("/users/{id}").buildAndExpand(user.id()).toUri();
        return ResponseEntity.created(uri).body(user);
    }

    @GetMapping
    public ResponseEntity<List<UserDTORes>> findAll() {
        List<UserDTORes> users = this.userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTORes> findById(@PathVariable Long id) {
        UserDTORes user = this.userService.findById(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTORes> update(@PathVariable Long id, @RequestBody UserDTOReq userDTOReq) {
        UserDTORes user = this.userService.update(id, userDTOReq);
        return ResponseEntity.ok(user);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<UserDTORes> patch(@PathVariable Long id, @RequestBody UserPatchDTOReq updates) {
        UserDTORes user = this.userService.patch(id, updates);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserDTOReq> delete(@PathVariable Long id) {
        this.userService.delete(id);
        return ResponseEntity.noContent().build();
    }

}