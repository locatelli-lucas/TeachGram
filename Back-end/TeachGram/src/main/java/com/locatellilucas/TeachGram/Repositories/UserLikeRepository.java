package com.locatellilucas.TeachGram.Repositories;

import com.locatellilucas.TeachGram.Entities.UserLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikeRepository extends JpaRepository<UserLike, Long> {
}
