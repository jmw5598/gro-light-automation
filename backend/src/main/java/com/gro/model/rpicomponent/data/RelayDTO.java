package com.gro.model.rpicomponent.data;

import com.gro.model.rpicomponent.AbstractRPiComponent;

public class RelayDTO {

    private AbstractRPiComponent component;
    private RelayState state;
    
    public RelayDTO() {}
    
    public RelayDTO(AbstractRPiComponent component, RelayState state) {
        this.component = component;
        this.state = state;
    }
    
    public AbstractRPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(AbstractRPiComponent component) {
        this.component = component;
    }
    
    public RelayState getState() {
        return state;
    }
    
    public void setState(RelayState state) {
        this.state = state;
    }
    
}
