package com.gro.repository.rpicomponent;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.repository.RestrictedWriteRepository;

public interface RPiComponentRepository extends RestrictedWriteRepository<AbstractRPiComponent, Integer> {
    
}
