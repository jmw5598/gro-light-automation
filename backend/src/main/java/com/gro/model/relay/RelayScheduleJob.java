package com.gro.model.relay;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.RPiComponent;

@Entity
public class RelayScheduleJob {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    @OneToOne
    private RPiComponent component;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private RelayState state;
    
    @NotNull
    private Boolean enabled;
    
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;
    
    public RelayScheduleJob() {}

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

    public RelayState getState() {
        return state;
    }

    public void setState(RelayState state) {
        this.state = state;
    }

    public Boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
    
    public Date getTime() {
        return this.time;
    }
    
    public void setTime(Date time) {
        this.time = time;
    }
    
    
    
}
