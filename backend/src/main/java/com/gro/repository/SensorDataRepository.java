package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.gro.model.Pin;
import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;

public interface SensorDataRepository extends CrudRepository<SensorData, Integer>{
    @Override
    public List<SensorData> findAll();
    public List<SensorData> findAllBySensor(Sensor sensor);
}
