package com.locatellilucas.TeachGram.Services;

import com.locatellilucas.TeachGram.DTO.Res.follow.FollowDTORes;
import com.locatellilucas.TeachGram.Entities.Follow;
import com.locatellilucas.TeachGram.Entities.User;
import com.locatellilucas.TeachGram.Repositories.FollowRepository;
import com.locatellilucas.TeachGram.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private UserRepository userRepository;

    public Follow createFollow(User follower, User followed) {
        Follow follow = this.followRepository.save(new Follow(follower, followed));
        System.out.println(follow);
        return follow;
    }

    public List<Follow> getAllFollows() {
        return this.followRepository.findAll();
    }

    public List<FollowDTORes> getFollowsByUserId(Long id) {
        List<Follow> followers = getAllFollows().stream().filter(element -> element.getFollower().getId().equals(id)).toList();
        return followers.stream().map(FollowDTORes::followToDTOFollowing).toList();
    }

    public List<Follow> getFollowersByUserId(Long id) {
        return getAllFollows().stream().filter(element -> element.getFollowed().getId().equals(id)).toList();
    }

    public List<Follow> getAllUserFollows(Long id) {
        return this.getAllFollows().stream().filter(element -> element.getFollower().getId().equals(id) || element.getFollowed().getId().equals(id)).toList();
    }

    public void deleteFollow(Long followerId, Long followedId) {
        Follow follow = this.findFollowByFollowerAndFollowedId(followerId, followedId);
        System.out.println(follow);
        this.followRepository.delete(follow);
    }

    public Follow findFollowByFollowerAndFollowedId(Long followerId, Long followedId) {
        Follow follow = this.getAllFollows()
                .stream()
                .filter(element -> element.getFollower().getId().equals(followerId) && element.getFollowed().getId().equals(followedId)).findFirst()
                .orElseThrow(() -> new NullPointerException("Follow not found"));
        System.out.println(follow);
        return follow;
    }

    public void deleteAllFollowsByUserId(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new NullPointerException("User not found"));
        this.followRepository.deleteAll(user.getFollows());
    }
}
