package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.MoistureSensor;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface MoistureSensorRepository extends RestrictedWriteRepository<MoistureSensor, Integer> {
    
}
