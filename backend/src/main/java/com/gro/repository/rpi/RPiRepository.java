package com.gro.repository.rpi;

import org.springframework.stereotype.Repository;

import com.gro.model.rpi.RPi;
import com.gro.repository.RestrictedWriteRepository;

@Repository
public interface RPiRepository extends RestrictedWriteRepository<RPi, Integer> {

}
