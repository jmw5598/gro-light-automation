package com.gro.repository.rpicomponent;

import org.springframework.stereotype.Repository;

import com.gro.model.rpicomponent.component.HumiditySensor;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface HumiditySensorRepository extends RestrictedWriteRepository<HumiditySensor, Integer> {

}
