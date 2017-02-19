package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.Pin;

public interface PinRepository extends JpaRepository<Pin, Integer> {
    public Pin findByAlias(String alias);
}
