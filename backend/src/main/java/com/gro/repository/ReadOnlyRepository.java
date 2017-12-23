package com.gro.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ReadOnlyRepository<T, ID extends Serializable> extends BaseRepository<T, ID> {
    T findOne(ID id);
    boolean exists(ID id);
    List<T> findAll();
    long count();
}
