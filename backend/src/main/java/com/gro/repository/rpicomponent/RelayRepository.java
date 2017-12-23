package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.Relay;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface RelayRepository extends RestrictedWriteRepository<Relay, Integer> {

}
