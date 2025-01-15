package com.locatellilucas.teachgram.services;

import com.locatellilucas.teachgram.entities.Post;
import com.locatellilucas.teachgram.entities.User;
import com.locatellilucas.teachgram.entities.UserLike;
import com.locatellilucas.teachgram.exceptions.EntityNotFoundException;
import com.locatellilucas.teachgram.repositories.PostRepository;
import com.locatellilucas.teachgram.repositories.UserLikeRepository;
import com.locatellilucas.teachgram.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLikeService {

    @Autowired
    private UserLikeRepository userLikeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public UserLike createUserLike(Long userId, Long postId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User with id " + userId + " not found"));
        Post post = this.postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("User with id " + postId + " not found"));
        return this.userLikeRepository.save(new UserLike(user, post));
    }

    public Page<UserLike> getAllUserLikes(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.userLikeRepository.findAll(pageable);
    }

    public void deleteAllByPostId(Long postId, int page, int size) {
        Page<UserLike> list = (Page<UserLike>) getAllUserLikes(page, size).filter(element -> element.getPost().getId().equals(postId));
        this.userLikeRepository.deleteAll(list);
    }

    public void deleteAllByUserId(Long userId, int page, int size) {
        Page<UserLike> list = (Page<UserLike>) getAllUserLikes(page, size).filter(element -> element.getUser().getId().equals(userId));
        this.userLikeRepository.deleteAll(list);
    }

    public void deleteUserLike(Long id) {
        this.userLikeRepository.deleteById(id);
    }

}
