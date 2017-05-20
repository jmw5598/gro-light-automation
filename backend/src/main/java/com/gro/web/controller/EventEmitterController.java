package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.gro.web.service.HumidityDataService;
import com.gro.web.service.TemperatureDataService;

@RestController
@RequestMapping("/api/event")
public class EventEmitterController {
    
    @Autowired
    private TemperatureDataService temperatureDataService;
    
    @Autowired
    private HumidityDataService humidityDataService;
    
    @RequestMapping("/temperature")
    public SseEmitter streamTemperature() {
        SseEmitter emitter = new SseEmitter();
        emitter.onCompletion(() -> this.temperatureDataService.removeEmitter(emitter));
        this.temperatureDataService.addEmitter(emitter);
        return emitter;
    }
    
    @RequestMapping("/humidity")
    public SseEmitter streamHumidity() {
        SseEmitter emitter = new SseEmitter();
        emitter.onCompletion(() -> this.humidityDataService.removeEmitter(emitter));
        this.humidityDataService.addEmitter(emitter);
        return emitter;
        
    }
    
}
