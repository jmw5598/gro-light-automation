package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.TemperatureSensor;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface TemperatureSensorRepository extends RestrictedWriteRepository<TemperatureSensor, Integer> {
    
}
