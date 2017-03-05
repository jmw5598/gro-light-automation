package com.gro.model.sensor;

import java.sql.Timestamp;

import javax.validation.constraints.NotNull;

public class TemperatureHumidityDTO {
    
    @NotNull
    private int sensorId;
    
    @NotNull
    private double temperature;
    
    @NotNull
    private double humidity;
    
    @NotNull
    private Timestamp timestamp;

    public int getSensorId() {
        return sensorId;
    }

    public void setSensorId(int sensorId) {
        this.sensorId = sensorId;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public double getHumidity() {
        return humidity;
    }

    public void setHumidity(double humidity) {
        this.humidity = humidity;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
    
}
