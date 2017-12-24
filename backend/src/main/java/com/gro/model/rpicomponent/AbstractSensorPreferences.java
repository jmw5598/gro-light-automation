package com.gro.model.rpicomponent;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
public class AbstractSensorPreferences extends AbstractRPiComponentPreferences {
    
    @NotNull
    private Double minValue;
    
    @NotNull
    private Double maxValue;
    
    @NotNull
    private Boolean notificationEnabled = false;
    
    @NotNull
    private Boolean notified = false;
    
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
