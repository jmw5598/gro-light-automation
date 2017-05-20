package com.gro.web.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseEmitterService<T> {
    public void addEmitter(SseEmitter emitter);
    public void removeEmitter(SseEmitter emitter);
    public void emit(T t);
}
