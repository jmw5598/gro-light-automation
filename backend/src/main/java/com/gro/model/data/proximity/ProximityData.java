package com.gro.model.data.proximity;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import com.gro.model.data.AbstractRPiComponentData;

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
