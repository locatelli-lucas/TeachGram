package com.locatellilucas.teachgram.repositories;

import com.locatellilucas.teachgram.entities.Follow;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    @NotNull
    Page<Follow> findAll(@NotNull Pageable pageable);
}
