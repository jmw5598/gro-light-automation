package com.gro.model.rpicomponent;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractRPiComponentPreferences {
    
    private Double minValue;
    private Double maxValue;
    private Boolean notificationEnabled = false;
    private Boolean hasBeenNotified = false;
    
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
