package com.gro.repository.rpicomponent;

import java.util.List;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.RPiComponentType;

public interface RPiComponentRepository extends CrudRepository<AbstractRPiComponent, Integer> {
    
    //List<AbstractRPiComponent> findAllByType(RPiComponentType type);
    
    @Override
    //@Cacheable(value="componentCache")
    List<AbstractRPiComponent> findAll();
    
    @Override
    @Cacheable(value="componentCache")
    AbstractRPiComponent findOne(Integer id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CachePut(value="componentCache")
    <S extends AbstractRPiComponent> S save(S entity);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    <S extends AbstractRPiComponent> Iterable<S> save(Iterable<S> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value="componentCache")
    void delete(Integer id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @CacheEvict(value="componentCache")
    void delete(AbstractRPiComponent entity);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(Iterable<? extends AbstractRPiComponent> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void deleteAll();
    
}
