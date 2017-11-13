package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.relay.RelayScheduleJob;

@PreAuthorize("hasRole('ADMIN')")
public interface RelayScheduleJobRepository extends CrudRepository<RelayScheduleJob, Integer> {
    List<RelayScheduleJob> findAll();
    List<RelayScheduleJob> findByEnabled(Boolean enabled);
    List<RelayScheduleJob> findAllByComponentId(Integer id);
}
