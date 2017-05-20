package com.gro.web.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public abstract class AbstractSseEmitterService<T> implements SseEmitterService <T>{
    
    private final List<SseEmitter> emitters = Collections.synchronizedList(new ArrayList<>());
    
    public final void addEmitter(SseEmitter emitter) {
        emitter.onCompletion(() -> emitters.remove(emitter));
        this.emitters.add(emitter);
    }
    
    public final void removeEmitter(SseEmitter emitter) {
        emitters.remove(emitter);
    }
    
    public final void emit(T t) {
        for(SseEmitter e : emitters) {
            try {
                e.send(t, MediaType.APPLICATION_JSON);
            } catch (IOException e1) {
                e.complete();
                emitters.remove(e);
                e1.printStackTrace();
            }
        }
    }
}
