package com.gro.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.security.access.prepost.PreAuthorize;

@NoRepositoryBean
public interface RestrictedWriteRepository<T, ID extends Serializable> extends BaseRepository<T, ID> {
    
    T findOne(ID id);
    boolean exists(ID id);
    List<T> findAll();
    long count();
    
    @PreAuthorize("hasRole('ADMIN')")
    void delete(ID id);
    
    @PreAuthorize("hasRole('ADMIN')")
    void delete(Iterable<? extends T> entities);
    
    @PreAuthorize("hasRole('ADMIN')")
    <S extends T> S save(S entity);
}
