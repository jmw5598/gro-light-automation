package com.gro.repository;

import java.util.List;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.temperature_humidity.TemperatureHumidityData;


public interface TemperatureHumidityRepositoryCustom {
    public List<TemperatureHumidityData> findAllBySensorWithinHours(Sensor sensor, long hours);
    public List<TemperatureHumidityData> findAllBySensorWithinDays(Sensor sensor, long days);
    public List<TemperatureHumidityData> findAllBySensorWithinWeeks(Sensor sensor, long weeks);
    public List<TemperatureHumidityData> findAllBySensorWithinMonths(Sensor sensor, long months);
}
