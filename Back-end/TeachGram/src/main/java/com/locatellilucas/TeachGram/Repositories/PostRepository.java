package com.locatellilucas.teachgram.repositories;

import com.locatellilucas.teachgram.entities.Post;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @NotNull
    Page<Post> findAll(@NotNull Pageable pageable);
}
