package com.gro.web.controller;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gro.model.rpicomponent.exception.EntityNotFoundException;
import com.gro.repository.BaseRepository;

public abstract class AbstractRestController<T, ID extends Serializable> {
    
    private Logger logger = LoggerFactory.getLogger(AbstractRestController.class);
    protected BaseRepository<T, ID> repository;
    
    public AbstractRestController(BaseRepository<T, ID> repository) {
        this.repository = repository;
    }
    
    @RequestMapping(method=RequestMethod.GET)
    public Iterable<T> getAll() {
        return this.repository.findAll();
    }
    
    @RequestMapping(method=RequestMethod.POST)
    public T create(@RequestBody T obj) {
        logger.debug("create() with request body {} of type {}", obj, obj.getClass());
        return this.repository.save(obj);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public T getById(@PathVariable ID id) {
        T t = this.repository.findOne(id);
        if(t == null)
            throw new EntityNotFoundException("Entity with id " + id + " was not found");
        return this.repository.findOne(id);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public T updateById(@PathVariable ID id, @RequestBody T obj) {
        logger.debug("update() object with id {} with request body {}", id, obj);
        
        T entity = repository.findOne(id);
        
        try {
            BeanUtils.copyProperties(obj, entity);
        } catch (Exception exception) {
            logger.warn("error while copying properties between beans", exception);
        }
        
        logger.debug("new merged entity {}", entity);
        
        return repository.save(entity);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public Map<String, Object> deleteById(@PathVariable ID id) {
        T entity = this.repository.findOne(id);
        if(entity != null)
            this.repository.delete(id);
        else
            throw new EntityNotFoundException("Entity with id " + id + " was not found");
        Map<String, Object> result = new HashMap<>();
        result.put("success", true);
        return result;
    }
}
