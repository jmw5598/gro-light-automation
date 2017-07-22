package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.gro.web.service.HumidityDataService;
import com.gro.web.service.ObjectSseEmitterService;
import com.gro.web.service.RelayService;
import com.gro.web.service.TemperatureDataService;

@RestController
@RequestMapping("/api/event")
public class EventEmitterController {
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @RequestMapping(method=RequestMethod.GET)
    public SseEmitter streamEvents() {
        SseEmitter emitter = new SseEmitter();
        emitter.onCompletion(() -> this.objectSseEmitterService.removeEmitter(emitter));
        this.objectSseEmitterService.addEmitter(emitter);
        return emitter;
    }  
    
}
