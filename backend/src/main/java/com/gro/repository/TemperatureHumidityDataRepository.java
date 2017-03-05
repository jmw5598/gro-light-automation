package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.temperature_humidity.TemperatureHumidityData;
import com.gro.repository.TemperatureHumidityRepositoryCustom;

@Repository
public interface TemperatureHumidityDataRepository extends CrudRepository<TemperatureHumidityData, Integer>, TemperatureHumidityRepositoryCustom {
    
    public List<TemperatureHumidityData> findAllBySensor(Sensor sensor);
    
    @Override
    public List<TemperatureHumidityData> findAll();

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    <S extends TemperatureHumidityData> S save(S entity);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    <S extends TemperatureHumidityData> Iterable<S> save(Iterable<S> entities);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Integer id);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(TemperatureHumidityData entity);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Iterable<? extends TemperatureHumidityData> entities);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void deleteAll();
}
