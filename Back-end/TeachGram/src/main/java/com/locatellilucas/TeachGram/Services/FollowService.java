package com.locatellilucas.teachgram.services;

import com.locatellilucas.teachgram.dto.req.FollowDTOReq;
import com.locatellilucas.teachgram.dto.res.follow.FollowDTORes;
import com.locatellilucas.teachgram.entities.Follow;
import com.locatellilucas.teachgram.entities.User;
import com.locatellilucas.teachgram.repositories.FollowRepository;
import com.locatellilucas.teachgram.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private UserRepository userRepository;

    public FollowDTORes createFollow(FollowDTOReq followDTOReq) {
        Follow follow = this.followRepository.save(followDTOReq.dtoToUser());
        return FollowDTORes.followToDTO(follow);
    }

    public Page<Follow> getAllFollows(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.followRepository.findAll(pageable);
    }

    public List<FollowDTORes> getFollowsByUserId(Long id, int page, int size) {
        return getAllFollows(page, size)
                .stream()
                .filter(element -> element.getFollower().getId().equals(id))
                .map(FollowDTORes::followToDTO)
                .toList();
    }

    public List<FollowDTORes> getFollowersByUserId(Long id, int page, int size) {
        return getAllFollows(page, size)
                .stream()
                .filter(element -> element.getFollowed().getId().equals(id))
                .map(FollowDTORes::followToDTO)
                .toList();
    }

    public List<FollowDTORes> getAllUserFollows(Long id, int page, int size) {
        return this.getAllFollows(page, size)
                .stream()
                .filter(element -> element.getFollower().getId().equals(id) || element.getFollowed().getId().equals(id))
                .map(FollowDTORes::followToDTO)
                .toList();
    }

    public void deleteFollow(Long followerId, Long followedId, int page, int size) {
        Follow follow = this.findFollowByFollowerAndFollowedId(followerId, followedId, page, size);
        System.out.println(follow);
        this.followRepository.delete(follow);
    }

    public Follow findFollowByFollowerAndFollowedId(Long followerId, Long followedId, int page, int size) {
        return this.getAllFollows(page, size)
                .stream()
                .filter(element -> element.getFollower().getId().equals(followerId) && element.getFollowed().getId().equals(followedId))
                .findFirst()
                .orElseThrow(() -> new NullPointerException("Follow not found"));
    }

    public void deleteAllFollowsByUserId(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new NullPointerException("User not found"));
        this.followRepository.deleteAll(user.getFollows());
    }
}