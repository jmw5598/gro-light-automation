package com.gro.model.sensor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "proximity_data",
       uniqueConstraints=
           @UniqueConstraint(columnNames={"timestamp", "sensor_id"})
)
@JsonIgnoreProperties({"sensor"})
public class ProximityData extends AbstractSensorData {
    
    @NotNull
    private double proximity;
    
    @ManyToOne
    @JoinColumn(name="sensor_id")
    private Sensor sensor;
    
    public double getProximity() {
        return this.proximity;
    }
    
    public void setProximity(double proximity) {
        this.proximity = proximity;
    }
    
    public Sensor getSensor() {
        return this.sensor;
    }
    
    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
    
}
