package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;
import com.gro.model.rpicomponent.component.MoistureSensor;

@Entity
public class MoistureData extends AbstractRPiComponentData {
    
    @NotNull
    private Double moisture;
    
    @ManyToOne
    private MoistureSensor component;
    
    public MoistureData() {}

    public Double getMoisture() {
        return moisture;
    }

    public void setMoisture(Double moisture) {
        this.moisture = moisture;
    }

    public MoistureSensor getComponent() {
        return component;
    }

    public void setComponent(MoistureSensor component) {
        this.component = component;
    }

}
