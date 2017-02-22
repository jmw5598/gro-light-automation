package com.gro.repository;

import java.util.List;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;


public interface SensorDataRepositoryCustom {
    public List<SensorData> findAllBySensorWithinHours(Sensor sensor, long hours);
    public List<SensorData> findAllBySensorWithinDays(Sensor sensor, long days);
    public List<SensorData> findAllBySensorWithinWeeks(Sensor sensor, long weeks);
    public List<SensorData> findAllBySensorWithinMonths(Sensor sensor, long months);
}
