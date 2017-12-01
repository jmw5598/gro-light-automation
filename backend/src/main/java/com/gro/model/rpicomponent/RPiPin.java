package com.gro.model.rpicomponent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class RPiPin {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Enumerated(EnumType.STRING)
    @NotNull
    private RPiPinType type;
    
    @OneToOne
    @NotNull
    private RPi pin;
    
    @ManyToOne
    @NotNull
    private RPiComponent component;
    
    public RPiPin() {}

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

    public RPi getPin() {
        return pin;
    }

    public void setPin(RPi pin) {
        this.pin = pin;
    }
    
    public RPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
}
