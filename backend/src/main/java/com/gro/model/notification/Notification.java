package com.gro.model.notification;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.RPiComponent;

@Entity
public class Notification {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date timestamp;
    
    @NotNull
    private String message;
    
    @ManyToOne
    @NotNull
    private RPiComponent component;
    
    @NotNull
    private Boolean isRead = false;
    

    public Notification() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public RPiComponent getComponent() {
        return component;
    }

    public void setComponent(RPiComponent component) {
        this.component = component;
    }

    public Boolean isRead() {
        return isRead;
    }

    public void setRead(Boolean isRead) {
        this.isRead = isRead;
    }
    
}
