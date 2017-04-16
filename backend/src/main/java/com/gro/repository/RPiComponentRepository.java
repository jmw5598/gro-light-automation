package com.gro.repository;

import java.util.List;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.RPiComponent;

public interface RPiComponentRepository extends CrudRepository<RPiComponent, Integer> {
    
    @Override
    @Cacheable(value="componentCache")
    List<RPiComponent> findAll();
    
    @Override
    @Cacheable(value="componentCache")
    RPiComponent findOne(Integer id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CachePut(value="componentCache")
    <S extends RPiComponent> S save(S entity);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    <S extends RPiComponent> Iterable<S> save(Iterable<S> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value="componentCache")
    void delete(Integer id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value="componentCache")
    void delete(RPiComponent entity);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(Iterable<? extends RPiComponent> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void deleteAll();
    
}
