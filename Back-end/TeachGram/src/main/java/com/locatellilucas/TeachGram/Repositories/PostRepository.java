package com.locatellilucas.TeachGram.Repositories;

import com.locatellilucas.TeachGram.Entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
