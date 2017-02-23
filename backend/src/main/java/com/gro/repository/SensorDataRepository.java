package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;
import com.gro.repository.SensorDataRepositoryCustom;

@Repository
public interface SensorDataRepository extends CrudRepository<SensorData, Integer>, SensorDataRepositoryCustom {
    
    @Override
    public List<SensorData> findAll();
    
    public List<SensorData> findAllBySensor(Sensor sensor);
    
}
