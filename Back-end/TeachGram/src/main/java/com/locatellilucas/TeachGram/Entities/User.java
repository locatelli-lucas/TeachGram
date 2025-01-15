package com.locatellilucas.teachgram.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.io.*;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "tb_users")
public class User implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private boolean deleted = false;
    private Instant createdAt;
    private Instant updatedAt;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String userName;

    private String bio;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String profileLink;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "followed")
    private List<Follow> follows = new ArrayList<>();

    public User(String name, String userName, String bio, String phone, String email, String password, String profileLink) {
        this.name = name;
        this.userName = userName;
        this.bio = bio;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.profileLink = profileLink;
    }

    public User(Long id, String name, String userName, String bio, String phone, String email, String password, String profileLink) {
        Id = id;
        this.name = name;
        this.userName = userName;
        this.bio = bio;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.profileLink = profileLink;
    }

    public User(Long id, boolean deleted, String name, String userName, String bio, String phone, String email, String password, String profileLink) {
        Id = id;
        this.deleted = deleted;
        this.name = name;
        this.userName = userName;
        this.bio = bio;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.profileLink = profileLink;
    }

    public User() {

    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    @PrePersist
    public void setCreatedAt() {
        this.createdAt = Instant.now();
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    @PreUpdate
    public void setUpdatedAt() {
        this.updatedAt = Instant.now();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfileLink() {
        return this.profileLink;
    }

    public void setProfileLink(String profileLink) {
        this.profileLink = profileLink;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public List<Follow> getFollows() {
        return follows;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return Objects.equals(Id, user.Id);
    }
    @Override
    public int hashCode() {
        return Objects.hash(Id);
    }

    @Override
    public String toString() {
        return "User{" +
                "Id=" + Id +
                ", deleted=" + deleted +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", name='" + name + '\'' +
                ", userName='" + userName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", profileLink='" + profileLink + '\'' +
                '}';
    }

}
