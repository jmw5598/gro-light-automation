package com.gro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

import com.gro.model.rpipin.RPiPin;

@Repository
public interface RPiPinRepository extends CrudRepository<RPiPin, Integer> {
    
    List<RPiPin> findAll();

    @Override
    default <S extends RPiPin> S save(S entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    <S extends RPiPin> Iterable<S> save(Iterable<S> entities);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(Integer id);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(RPiPin entity);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(Iterable<? extends RPiPin> entities);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void deleteAll();
    
    
}
