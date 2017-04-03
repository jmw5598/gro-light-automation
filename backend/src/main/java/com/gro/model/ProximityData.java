package com.gro.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class ProximityData extends AbstractRPiComponentData {
    
    @NotNull
    private Double proximity;
    
    public ProximityData() {}

    public Double getProximity() {
        return proximity;
    }

    public void setProximity(Double proximity) {
        this.proximity = proximity;
    }
    
}
