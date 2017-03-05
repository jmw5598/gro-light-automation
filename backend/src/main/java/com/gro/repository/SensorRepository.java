package com.gro.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.sensor.Sensor;

@Transactional
public interface SensorRepository extends CrudRepository<Sensor, Integer> {

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    <S extends Sensor> S save(S entity);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    <S extends Sensor> Iterable<S> save(Iterable<S> entities);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Integer id);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Sensor entity);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Iterable<? extends Sensor> entities);

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    void deleteAll();

    @Override
    public List<Sensor> findAll();
    
}
