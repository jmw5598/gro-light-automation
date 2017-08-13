package com.gro.model.rpicomponent;

public enum RPiComponentType {
    TEMPERATURE_HUMIDITY,
    TEMPERATURE,
    HUMIDITY,
    MOISTURE,
    PROXIMITY,
    RELAY;
    
    public static RPiComponentType from(String type) {
        RPiComponentType result = null;
        
        switch(type.toLowerCase()) {
            case "temperature_humidity":
                result = TEMPERATURE_HUMIDITY;
                break;
            case "temperature":
                result = TEMPERATURE;
                break;
            case "humidity":
                result = HUMIDITY;
                break;
            case "proximity":
                result = PROXIMITY;
                break;
            case "relay":
                result = RELAY;
                break;
            case "moisture":
                result = MOISTURE;
                break;
            default:
                result = null;
        }
        
        return result;
    }
    
}
