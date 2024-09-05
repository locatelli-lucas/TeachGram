package com.locatellilucas.TeachGram.Services;

import com.locatellilucas.TeachGram.DTO.Req.post.PostDTOReq;
import com.locatellilucas.TeachGram.DTO.Req.post.PostPatchDTOReq;
import com.locatellilucas.TeachGram.DTO.Res.post.PostDTORes;
import com.locatellilucas.TeachGram.Entities.Post;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Exceptions.BadRequestException;
import com.locatellilucas.TeachGram.Exceptions.EntityNotFoundException;
import com.locatellilucas.TeachGram.Repositories.PostRepository;
import com.locatellilucas.TeachGram.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public PostDTORes create(PostDTOReq postDTOReq) {
        if(postDTOReq == null || !PostDTOReq.isValid(postDTOReq)) throw new BadRequestException("Invalid post data provided");

        Post post = this.postRepository.save(postDTOReq.dtoToPost());
        System.out.println(post);
        return PostDTORes.postToDto(post);
    }

    public List<PostDTORes> findAll() {
        List<Post> list = this.postRepository.findAll();
        list.forEach(System.out::println);
        return list.stream().map(PostDTORes::postToDto).toList();
    }

    public PostDTORes findById(Long id) {
        Post post = this.findByIdEntity(id);
        System.out.println(post);
        return PostDTORes.postToDto(post);
    }

    public PostDTORes update(Long id, PostDTOReq postDTOReq) {
        if(postDTOReq == null || !PostDTOReq.isValid(postDTOReq)) throw new BadRequestException("Invalid post data provided");

        Post post = this.postRepository.save(postDTOReq.dtoToPost(id));
        System.out.println(post);
        return PostDTORes.postToDto(post);
    }

    public PostDTORes patch(Long id, PostPatchDTOReq updates) {
        if(updates == null) throw new BadRequestException("Invalid post data provided");

        Post post = findByIdEntity(id);

        try {
            if (!Objects.equals(updates.description(), "")) post.setDescription(updates.description());
            if (!Objects.equals(updates.photoLink(), "")) post.setPhotoLink(updates.photoLink());
            if (updates.numLikes() >= 0) post.setNumLikes(updates.numLikes());
        } catch (Exception e) {
            throw new BadRequestException("Invalid post data provided");
        }

        this.postRepository.save(post);
        System.out.println(post);
        return PostDTORes.postToDto(post);
    }

    public void delete(Long id) {
        Post post = findByIdEntity(id);
        this.postRepository.delete(post);
    }

    public void deleteAllByUserId(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User with id " + userId + " not found"));
        List<Post> list = user.getPosts();
        this.postRepository.deleteAll(list);
    }

    private Post findByIdEntity(Long id) {
        return this.postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post with id " + id + " not found"));
    }


}
