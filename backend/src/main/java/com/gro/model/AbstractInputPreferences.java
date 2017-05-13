package com.gro.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
public abstract class AbstractInputPreferences extends AbstractPreferences {
    
    @NotNull
    private Integer readFrequency;
    
    @Enumerated(EnumType.STRING)
    @NotNull
    private TimeUnit timeUnit = TimeUnit.MILLISECONDS;
    
    public Integer getReadFrequency() {
        return readFrequency;
    }
    
    public void setReadFrequency(Integer readFrequency) {
        this.readFrequency = readFrequency;
    }
    
    public TimeUnit getTimeUnit() {
        return timeUnit;
    }
    
    public void setTimeUnit(TimeUnit timeUnit) {
        this.timeUnit = timeUnit;
    }
    
}
