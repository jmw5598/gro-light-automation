package com.gro.model.rpicomponent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class RPiPin {
        
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique = true)
    @NotNull
    private Integer physicalPin;
    
    @NotNull
    private String description;
    
    @NotNull
    private Boolean usable = false;
    
    @OneToOne
    private RPiPinDetails pinDetails;

    public RPiPin() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPin() {
        return physicalPin;
    }

    public void setPin(Integer physicalPin) {
        this.physicalPin = physicalPin;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public RPiPinDetails getPinDetails() {
        return pinDetails;
    }

    public void setPinDetails(RPiPinDetails pinDetails) {
        this.pinDetails = pinDetails;
    }

    public Integer getPhysicalPin() {
        return physicalPin;
    }

    public void setPhysicalPin(Integer physicalPin) {
        this.physicalPin = physicalPin;
    }

    public Boolean isUsable() {
        return usable;
    }

    public void setUsable(Boolean usable) {
        this.usable = usable;
    }
    
}
