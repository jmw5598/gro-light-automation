package com.gro.model.sensor.proximity;

public class ProximityDTO {
    
    private double proximity;
    private int sensorId;
    
    public ProximityDTO() {}
    
    public double getProximity() {
        return this.proximity;
    }
    
    public void setProximity(double proximity) {
        this.proximity = proximity;
    }
    
    public int getSensorId() {
        return this.sensorId;
    }
    
    public void setSensorId(int sensorId) {
        this.sensorId = sensorId;
    }
    
}
