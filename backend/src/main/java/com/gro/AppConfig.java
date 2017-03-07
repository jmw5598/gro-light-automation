package com.gro;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.gro.resources.ObjectMapperFactory;

@Configuration
public class AppConfig {
    
    @Bean
    public Jackson2JsonObjectMapper jackson2JsonObjectMapper() {
        return ObjectMapperFactory.getMapper();
    }
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:4200");
                registry.addMapping("/auth")
                        .allowedOrigins("http://localhost:4200");
            }
        };
    }
    
}
