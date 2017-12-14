package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;

@Entity
public class MoistureData extends AbstractRPiComponentData {
    
    @NotNull
    private Double moisture;
    
    public MoistureData() {}

    public Double getMoisture() {
        return moisture;
    }

    public void setMoisture(Double moisture) {
        this.moisture = moisture;
    }    

}
