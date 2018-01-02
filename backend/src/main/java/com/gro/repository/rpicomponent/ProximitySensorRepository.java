package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.ProximitySensor;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface ProximitySensorRepository extends RestrictedWriteRepository<ProximitySensor, Integer> {
    
}
