package com.gro.model.relay;

import com.gro.model.rpicomponent.RPiComponent;

public class RelayDTO {

    private RPiComponent component;
    private RelayState state;
    
    public RelayDTO() {}
    
    public RelayDTO(RPiComponent component, RelayState state) {
        this.component = component;
        this.state = state;
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
    
}
