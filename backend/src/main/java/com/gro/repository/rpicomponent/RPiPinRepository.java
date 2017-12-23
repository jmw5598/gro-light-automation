package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpipin.RPiPin;
import com.gro.repository.ReadOnlyRepository;

@Repository
public interface RPiPinRepository extends ReadOnlyRepository<RPiPin, Integer> {
    
}
