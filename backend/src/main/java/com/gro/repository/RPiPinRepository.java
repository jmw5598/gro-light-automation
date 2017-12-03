package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.RPiPin;

@Repository
public interface RPiPinRepository extends CrudRepository<RPiPin, Integer> {
    
    List<RPiPin> findAll();
    
}
