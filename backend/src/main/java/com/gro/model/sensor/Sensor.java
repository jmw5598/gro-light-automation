package com.gro.model.sensor;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gro.model.sensor.proximity.ProximityData;
import com.gro.model.sensor.temperature_humidity.TemperatureHumidityData;


@Entity
@Table(name = "sensor")
@JsonIgnoreProperties({"temperatureHumidityData", "proximityData"})
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    private String alias;
    
    @Enumerated(EnumType.STRING)
    @NotNull
    private SensorType type;
    
    @NotNull
    @Column(unique = true)
    private int pin;
    
    @OneToMany(mappedBy="sensor")
    private List<TemperatureHumidityData> temperatureHumidityData;
    
    @OneToMany(mappedBy="sensor")
    private List<ProximityData> proximityData;

    public Sensor() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String getAlias() {
        return this.alias;
    }
    
    public void setAlias(String alias) {
        this.alias = alias;
    }

    public int getPin() {
        return pin;
    }

    public void setPin(int pin) {
        this.pin = pin;
    }

    public SensorType getType() {
        return type;
    }

    public void setType(SensorType type) {
        this.type = type;
    }
    
    public List<TemperatureHumidityData> getTemperatureHumidityData() {
        return temperatureHumidityData;
    }
    
    public void setTemperatureHumidityData(List<TemperatureHumidityData> temperatureHumidityData) {
        this.temperatureHumidityData = temperatureHumidityData;
    }
    
    public List<ProximityData> getProximityData() {
        return this.proximityData;
    }
    
    public void setProximityData(List<ProximityData> proximityData) {
        this.proximityData = proximityData;
    }

}