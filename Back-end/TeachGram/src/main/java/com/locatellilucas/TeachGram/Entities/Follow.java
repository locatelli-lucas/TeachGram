package com.locatellilucas.teachgram.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "tb_follow")
public class Follow implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "follower_id")
    private User follower;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "followed_id")
    private User followed;

    public Follow() {

    }

    public Follow(User follower, User followed) {
        this.follower = follower;
        this.followed = followed;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getFollower() {
        return follower;
    }

    public void setFollower(User follower) {
        this.follower = follower;
    }

    public User getFollowed() {
        return followed;
    }

    public void setFollowed(User followed) {
        this.followed = followed;
    }

    public User getUser() {
        return followed;
    }

    public void setUser(User followed) {
        this.followed = followed;
    }

    @Override
    public String toString() {
        return "Follower{" +
                "id=" + id +
                ", follower=" + follower +
                ", user_followed=" + followed +
                '}';
    }
}

