package com.gro.repository.rpicomponent;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.ProximitySensor;

@Repository
public interface ProximitySensorRepository extends CrudRepository<ProximitySensor, Integer> {
    // TODO: Secure delete methods with with ADMIN role
}
