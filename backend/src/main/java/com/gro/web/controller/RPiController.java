package com.gro.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gro.model.rpi.RPi;
import com.gro.repository.rpi.RPiRepository;
import com.gro.web.service.storage.StorageService;
import com.gro.model.rpicomponent.exception.EntityNotFoundException;

@RestController
@RequestMapping("/api/rpi")
public class RPiController extends AbstractRestController<RPi, Integer> {
    
    @Autowired
    private StorageService storageService;
    
    @Autowired
    public RPiController(RPiRepository repository) {
        super(repository);
    }
    
    @RequestMapping(value="{id}/image", method=RequestMethod.POST)
    public Map<String, Object> saveImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        RPi rpi = this.repository.findOne(id);
        if (rpi != null) {
            this.storageService.store(file);
            rpi.setImageUrl(file.getOriginalFilename());
            this.repository.save(rpi);
        } else {
            throw new EntityNotFoundException("RPi with supplied id was not found");
        }
        Map<String,Object> response = new HashMap<>();
        response.put("success", true);
        return response;
    }

}
