package com.gro.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.RPiComponent;
import com.gro.model.TemperatureData;

public interface TemperatureDataRepository extends JpaRepository<TemperatureData, Integer> {

    Page<TemperatureData> findByComponent(RPiComponent component, Pageable pageable);
    
}
