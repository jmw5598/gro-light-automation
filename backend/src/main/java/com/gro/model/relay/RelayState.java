package com.gro.model.relay;

public enum RelayState {
    ON,
    OFF;
    
    public static RelayState from(String state) {
        RelayState result = null;
        
        switch(state.toLowerCase()) {
            case "on":
                result = RelayState.ON;
                break;
            case "off":
                result = RelayState.OFF;
                break;
            default:
                result = null;
                break;
        }
        
        return result;
    }
}
