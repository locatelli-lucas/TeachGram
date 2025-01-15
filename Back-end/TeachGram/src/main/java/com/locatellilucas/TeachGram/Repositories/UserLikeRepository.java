package com.locatellilucas.teachgram.repositories;

import com.locatellilucas.teachgram.entities.UserLike;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikeRepository extends JpaRepository<UserLike, Long> {
    @NotNull
    Page<UserLike> findAll(@NotNull Pageable pageable);
}
