package com.gro.repository;

import org.springframework.data.repository.CrudRepository;

import com.gro.model.Pin;

public interface PinRepository extends CrudRepository<Pin, Integer> {
    public Pin findByAlias(String alias);
}
