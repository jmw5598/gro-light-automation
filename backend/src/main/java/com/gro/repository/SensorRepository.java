package com.gro.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import com.gro.model.sensor.Sensor;

@Transactional
public interface SensorRepository extends CrudRepository<Sensor, Integer> {
    @Override
    public List<Sensor> findAll();
}
