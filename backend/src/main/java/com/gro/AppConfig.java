package com.gro;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.gro.resources.ObjectMapperFactory;

@Configuration
public class AppConfig extends WebMvcConfigurerAdapter {
    
    @Bean
    public Jackson2JsonObjectMapper jackson2JsonObjectMapper() {
        return ObjectMapperFactory.getMapper();
    }
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowCredentials(true)
                .allowedHeaders("*")
                .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE")
                .allowedOrigins("*");
    }
    
}
