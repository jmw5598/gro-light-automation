package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.TemperatureData;

public interface TemperatureDataRepository extends JpaRepository<TemperatureData, Integer> {

}
