package com.gro.model.rpi;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpipin.RPiPin;

@Entity
public class RPi {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    private String description;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private RPiType type = RPiType.RPI_3_MODEL_B;
    
    @NotNull
    private String ip;
    
    @NotNull
    private Integer port;
    
    @JsonIgnore
    private String mqttUsername;
    
    @JsonIgnore
    private String mqttPassword;
    
    private String imageUrl;
    
    @OneToMany(mappedBy="rpi")
    @JsonIgnoreProperties(value={"rPi", "rpi"})
    private List<RPiPin> pins;
    
    @OneToMany(mappedBy="rpi")
    @JsonIgnoreProperties(value={"rPi", "rpi"})
    private List<AbstractRPiComponent> components;
    
    public RPi() {}

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

    public RPiType getType() {
        return type;
    }

    public void setType(RPiType type) {
        this.type = type;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Integer getPort() {
        return port;
    }

    public void setPort(Integer port) {
        this.port = port;
    }
    
    public String getMqttUsername() {
        return mqttUsername;
    }
    
    public void setMqttUsername(String mqttUsername) {
        this.mqttUsername = mqttUsername;
    }
    
    public String getMqttPassword() {
        return mqttPassword;
    }
    
    public void setMqttPassword(String mqqtPassword) {
        this.mqttPassword = mqttPassword;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<RPiPin> getPins() {
        return pins;
    }

    public void setPins(List<RPiPin> pins) {
        this.pins = pins;
    }

    public List<AbstractRPiComponent> getComponents() {
        return components;
    }

    public void setComponents(List<AbstractRPiComponent> components) {
        this.components = components;
    }

}
