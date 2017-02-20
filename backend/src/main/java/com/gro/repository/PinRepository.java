package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.gro.model.Pin;

public interface PinRepository extends CrudRepository<Pin, Integer> {
    @Override
    public List<Pin> findAll();
    public Pin findByAlias(String alias);
}
