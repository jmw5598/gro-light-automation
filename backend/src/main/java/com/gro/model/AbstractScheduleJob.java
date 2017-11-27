package com.gro.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.RPiComponent;

@MappedSuperclass
public abstract class AbstractScheduleJob {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @OneToOne
    @NotNull
    private RPiComponent component;
    
    @NotNull
    private Boolean enabled;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RPiComponent getComponent() {
        return component;
    }

    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
    public Boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
    
}
