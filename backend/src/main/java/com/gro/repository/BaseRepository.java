package com.gro.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

@NoRepositoryBean
public interface BaseRepository<T, ID extends Serializable> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID id);
    boolean exists(ID id);
    List<T> findAll();
    long count();
    void delete(ID id);
    void delete(Iterable<? extends T> entities);
}
