package com.gro.model.moisture;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import com.gro.model.data.AbstractRPiComponentData;

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
