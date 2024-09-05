package com.locatellilucas.TeachGram.Services;

import com.locatellilucas.TeachGram.Entities.Post;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Entities.UserLike;
import com.locatellilucas.TeachGram.Exceptions.EntityNotFoundException;
import com.locatellilucas.TeachGram.Repositories.PostRepository;
import com.locatellilucas.TeachGram.Repositories.UserLikeRepository;
import com.locatellilucas.TeachGram.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<UserLike> getAllUserLikes() {
        return this.userLikeRepository.findAll();
    }

    public void deleteAllByPostId(Long postId) {
        List<UserLike> list = getAllUserLikes().stream().filter(element -> element.getPost().getId().equals(postId)).toList();
        this.userLikeRepository.deleteAll(list);
    }

    public void deleteAllByUserId(Long userId) {
        List<UserLike> list = getAllUserLikes().stream().filter(element -> element.getUser().getId().equals(userId)).toList();
        this.userLikeRepository.deleteAll(list);
    }

    public void deleteUserLike(Long id) {
        this.userLikeRepository.deleteById(id);
    }

}
