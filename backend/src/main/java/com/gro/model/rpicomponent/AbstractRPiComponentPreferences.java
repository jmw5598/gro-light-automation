package com.gro.model.rpicomponent;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
public abstract class AbstractRPiComponentPreferences {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    private Double minValue;
    
    @NotNull
    private Double maxValue;
    
    @NotNull
    private Boolean notificationEnabled = false;
    
    @NotNull
    private Boolean notified = false;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getMinValue() {
        return minValue;
    }
    
    public void setMinValue(Double minValue) {
        this.minValue = minValue;
    }
    
    public Double getMaxValue() {
        return maxValue;
    }
    
    public void setMaxValue(Double maxValue) {
        this.maxValue = maxValue;
    }
    
    public Boolean isNotificationEnabled() {
        return notificationEnabled;
    }
    
    public void setNotificationEnabled(Boolean notificationEnabled) {
        this.notificationEnabled = notificationEnabled;
    }
    
    public Boolean isNotified() {
        return notified;
    }
    
    public void setNotified(Boolean notified) {
        this.notified = notified;
    }
    
}
