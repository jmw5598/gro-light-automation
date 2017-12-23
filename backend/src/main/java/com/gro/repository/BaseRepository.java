package com.gro.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T, ID extends Serializable> extends CrudRepository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID id);
    boolean exists(ID id);
    List<T> findAll();
    long count();
    void delete(ID id);
    void delete(Iterable<? extends T> entities);
}
