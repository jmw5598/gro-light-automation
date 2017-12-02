package com.gro.model.rpicomponent;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class RPiPinDetails implements Serializable {
   
    private static final long serialVersionUID = -1338202416204102894L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Enumerated(EnumType.STRING)
    @NotNull
    private RPiPinType type;
    
    @OneToOne
    @NotNull
    @JsonIgnoreProperties(value = {"rPiPinDetails"})
    private RPiPin pin;
    
    @ManyToOne
    @NotNull
    @JsonIgnoreProperties(value = {"pins"})
    private RPiComponent component;
    
    public RPiPinDetails() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RPiPinType getType() {
        return type;
    }

    public void setType(RPiPinType type) {
        this.type = type;
    }

    public RPiPin getPin() {
        return pin;
    }

    public void setPin(RPiPin pin) {
        this.pin = pin;
    }
    
    public RPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
}
