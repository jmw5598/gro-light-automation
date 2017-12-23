package com.gro.repository.rpicomponent;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.HumiditySensor;

@Repository
public interface HumiditySensorRepository extends CrudRepository<HumiditySensor, Integer> {
    //TODO: Secure delete methods with with ADMIN role
}
