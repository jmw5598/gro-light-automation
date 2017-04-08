package com.gro.model;

import java.util.Date;

public abstract class AbstractDataDTO {
    
    private Date timestamp;
    
    public AbstractDataDTO(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Date getTimestamp() {
        return timestamp;
    }
    
}
