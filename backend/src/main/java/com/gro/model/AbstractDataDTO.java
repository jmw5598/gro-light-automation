package com.gro.model;

import java.util.Date;

public abstract class AbstractDataDTO {
    
    private Date timestamp;
    private Integer componentId;
    
    public AbstractDataDTO() {}
    
    public AbstractDataDTO(Date timestamp) {
        this.timestamp = timestamp;
    }
    
    public AbstractDataDTO(Date timestamp, Integer componentId) {
        this.timestamp = timestamp;
        this.componentId = componentId;
    }

    public Date getTimestamp() {
        return timestamp;
    }
    
    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
    
    public Integer getComponentId() {
        return componentId;
    }
    
    public void setComponentId(Integer componentId) {
        this.componentId = componentId;
    }
    
}
