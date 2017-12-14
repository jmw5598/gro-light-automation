package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.scheduling.model.AbstractScheduleJob;

@Repository
public interface ScheduleRepository extends CrudRepository<AbstractScheduleJob, Integer> {
    List<AbstractScheduleJob> findAll();
}
