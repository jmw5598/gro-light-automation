package com.gro.web.service;

import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public class ImageStorageService implements StorageService {

    @Override
    public void init() {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void store(MultipartFile file) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public Path load(String filename) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Resource loadAsResource(String filename) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        
    }

}
