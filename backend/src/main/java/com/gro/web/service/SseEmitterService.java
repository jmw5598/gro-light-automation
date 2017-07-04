package com.gro.web.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseEmitterService<T> {
    public void addEmitter(SseEmitter emitter);
    public void removeEmitter(SseEmitter emitter);
    public void emit(T t);
}
