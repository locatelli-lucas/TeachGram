package com.locatellilucas.TeachGram.Repositories;

import com.locatellilucas.TeachGram.Entities.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
}
