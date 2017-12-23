package com.gro.repository.schedule;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.scheduling.model.IntervalScheduleJob;

@Repository
public interface IntervalScheduleRepository extends CrudRepository<IntervalScheduleJob, Integer> {
    List<IntervalScheduleJob> findAll();
}
