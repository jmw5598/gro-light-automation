package com.gro.model.data.proximity;

import java.util.Date;

import com.gro.model.data.AbstractDataDTO;

public class ProximityDTO extends AbstractDataDTO {
    
    private Double distance;
    
    public ProximityDTO() {}
    
    public ProximityDTO(Date timestamp, Double distance) {
        super(timestamp);
        this.distance = distance;
    }
    
    public ProximityDTO(Date timestamp, Double distance, Integer componentId) {
        super(timestamp, componentId);
        this.distance = distance;
    }
    
    public void setDistance(Double distance) {
        this.distance = distance;
    }
    
    public Double getDistance() {
        return this.distance;
    }
    
}
