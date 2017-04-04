package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.gro.model.RPiComponent;

public interface RPiComponentRepository extends CrudRepository<RPiComponent, Integer> {
    
    @Override
    List<RPiComponent> findAll();

}
