package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;

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
