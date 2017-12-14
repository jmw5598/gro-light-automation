package com.gro.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.MoistureSensor;

@Repository
public interface MoistureSensorRepository extends CrudRepository<MoistureSensor, Integer> {
    // TODO: Secure delete methods with with ADMIN role
}
