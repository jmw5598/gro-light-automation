package com.gro.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gro.model.sensor.Sensor;


@Entity
@Table(name = "pin")
public class Pin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Column(unique = true)
    private int pin;

    @NotNull
    private String alias;

    @OneToOne(mappedBy = "pin", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private Sensor sensor;

    public Pin() { }
    
    public Pin(String alias) {
        this.alias = alias;
    }

    public Pin(int id, String alias) {
        this.id = id;
        this.alias = alias;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public int getPin() {
        return pin;
    }
    
    public void setPin(int pin) {
        this.pin = pin;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }

}