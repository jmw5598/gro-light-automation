package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.sensor.Sensor;

public interface SensorRepository extends JpaRepository<Sensor, Integer> {
    
}
