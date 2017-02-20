package com.gro.model.sensor;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "sensor_data",
       uniqueConstraints=
           @UniqueConstraint(columnNames={"timestamp","sensor_id"})
)
@JsonIgnoreProperties({"sensor"})
public class SensorData {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timestamp;
    
    @NotNull
    private double temperature;
    
    @NotNull
    private double humidity;
    
    @ManyToOne
    @JoinColumn(name="sensor_id")
    private Sensor sensor;
    
    public SensorData() {}
    
    public SensorData(int id, double temperature, double humidity) {
        this.id = id;
        this.temperature = temperature;
        this.humidity = humidity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public Timestamp getTimestamp() {
        return timestamp;
    }
    
    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
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
    
    public Sensor getSensor() {
        return sensor;
    }
    
    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
    
}
