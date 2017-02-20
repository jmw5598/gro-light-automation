package com.gro.model.sensor;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gro.model.Pin;
import com.gro.model.sensor.SensorType;


@Entity
@Table(name = "sensor")
@JsonIgnoreProperties({"data"})
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pin_id", unique = true)
    @NotNull
    private Pin pin;

    @Enumerated(EnumType.STRING)
    @NotNull
    private SensorType type;
    
    @OneToMany(mappedBy="sensor")
    private List<SensorData> data;

    public Sensor() {}

    public Sensor(int id, Pin pin, SensorType type) {
        this.id = id;
        this.pin = pin;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Pin getPin() {
        return pin;
    }

    public void setPin(Pin pin) {
        this.pin = pin;
    }

    public SensorType getType() {
        return type;
    }

    public void setType(SensorType type) {
        this.type = type;
    }
    
    public List<SensorData> getData() {
        return data;
    }
    
    public void setData(List<SensorData> data) {
        this.data = data;
    }

}