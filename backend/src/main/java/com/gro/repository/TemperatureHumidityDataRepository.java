package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.TemperatureHumidityData;
import com.gro.repository.TemperatureHumidityRepositoryCustom;

@Repository
public interface TemperatureHumidityDataRepository extends CrudRepository<TemperatureHumidityData, Integer>, TemperatureHumidityRepositoryCustom {
    
    @Override
    public List<TemperatureHumidityData> findAll();
    
    public List<TemperatureHumidityData> findAllBySensor(Sensor sensor);
    
}
