package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.component.Relay;
import com.gro.model.rpicomponent.data.RelayDTO;
import com.gro.model.rpicomponent.data.RelayState;
import com.gro.model.rpicomponent.exception.InvalidRelayStateException;
import com.gro.model.rpicomponent.exception.RPiComponentNotFoundException;
import com.gro.repository.rpicomponent.RelayRepository;
import com.gro.web.service.RelayService;

@RestController
@RequestMapping("/api/component/relay")
public class RelayController extends AbstractRestController<Relay, Integer> {
    
    @Autowired
    private RelayService relayService;
    
    @Value("${exception.rpi-component-not-found}")
    private String componentNotFound;
    
    @Value("${exception.invalid-relay-state}")
    private String invalidRelayState;
    
    private RelayRepository relayRepository;
    
    @Autowired
    public RelayController(RelayRepository repository) {
        super(repository);
        this.relayRepository = repository;
    }
    
    
    @RequestMapping(value="/{id}/toggle", method=RequestMethod.PUT)
    public void toggleRelay(
            @PathVariable Integer id,
            @RequestParam(name="state", required=true) String state) throws Exception {
        
        Relay component = this.relayRepository.findOne(id);
        RelayState relayState = this.validateRelayState(state);
        RelayDTO relay = new RelayDTO(component, relayState);
        relayService.toggle(relay);
        
    }
    
    @RequestMapping(value="/{id}/poll", method=RequestMethod.GET)
    public void pollRelay(@PathVariable("id") Integer id) throws Exception {
        Relay component = validateRelay(id);
        RelayState relayState = null;
        RelayDTO relay = new RelayDTO(component, relayState);
        relayService.poll(relay);
    }
    
    private Relay validateRelay(Integer id) {
        Relay component = this.relayRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException(componentNotFound);
        return component;
    }
    
    private RelayState validateRelayState(String state) {
        RelayState relayState = RelayState.from(state);
        if(relayState == null)
            throw new InvalidRelayStateException(invalidRelayState);
        return relayState;
    }
    
}
