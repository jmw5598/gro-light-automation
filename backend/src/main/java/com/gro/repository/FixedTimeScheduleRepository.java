package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.scheduling.model.FixedTimeScheduleJob;

@Repository
public interface FixedTimeScheduleRepository extends CrudRepository<FixedTimeScheduleJob, Integer> {
    List<FixedTimeScheduleJob> findAll();
}
