package com.gro.repository.rpicomponent;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.TemperatureSensor;

@Repository
public interface TemperatureSensorRepository extends CrudRepository<TemperatureSensor, Integer> {
    // TODO: Secure delete methods with with ADMIN role
}
