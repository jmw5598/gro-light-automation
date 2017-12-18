package com.gro.model.rpicomponent;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractRPiComponentPreferences {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    private Double minValue;
    private Double maxValue;
    private Boolean notificationEnabled = false;
    private Boolean hasBeenNotified = false;
    
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
    
    public Boolean notificationEnabled() {
        return notificationEnabled;
    }
    
    public void setNotificationEnabled(Boolean notificationEnabled) {
        this.notificationEnabled = notificationEnabled;
    }
    
    public Boolean getHasBeenNotified() {
        return hasBeenNotified;
    }
    
    public void hasBeenNotified(Boolean hasBeenNotified) {
        this.hasBeenNotified = hasBeenNotified;
    }
    
}
