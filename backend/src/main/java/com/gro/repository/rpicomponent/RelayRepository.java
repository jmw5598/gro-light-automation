package com.gro.repository.rpicomponent;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.Relay;

@Repository
public interface RelayRepository extends CrudRepository<Relay, Integer> {
    // TODO: Secure delete methods with with ADMIN role
}
