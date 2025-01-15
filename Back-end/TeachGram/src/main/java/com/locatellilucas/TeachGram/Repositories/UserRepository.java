package com.locatellilucas.teachgram.repositories;

import com.locatellilucas.teachgram.entities.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @NotNull
    Page<User> findAll(@NotNull Pageable pageable);
}
