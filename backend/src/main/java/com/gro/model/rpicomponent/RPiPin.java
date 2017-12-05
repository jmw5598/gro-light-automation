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
public class RPiPin implements Serializable {

    private static final long serialVersionUID = -2178663258584172348L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    private String description;
    
    @NotNull
    private Integer physicalPin;
    
    @NotNull
    private Boolean usable;
    
    @Enumerated(EnumType.STRING)
    private RPiPinDirection direction;
    
    @ManyToOne
    @JsonIgnoreProperties(value={"pins"})
    private RPiComponent component;
    
    public RPiPin() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPhysicalPin() {
        return physicalPin;
    }

    public void setPhysicalPin(Integer physicalPin) {
        this.physicalPin = physicalPin;
    }

    public Boolean getUsable() {
        return usable;
    }

    public void setUsable(Boolean usable) {
        this.usable = usable;
    }

    public RPiPinDirection getDirection() {
        return direction;
    }
    
    public void setDirection(RPiPinDirection direction) {
        this.direction = direction;
    }
    
    public RPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
}
