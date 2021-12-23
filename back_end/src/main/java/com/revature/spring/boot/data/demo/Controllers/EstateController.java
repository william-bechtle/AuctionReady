package com.revature.spring.boot.data.demo.Controllers;

import com.revature.spring.boot.data.demo.repositories.EstateRepository;
import com.revature.spring.boot.data.demo.entities.Estate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EstateController {

    @Autowired
    private EstateRepository repository;

    @PostMapping("/estate")
    public Estate saveEstate(@RequestBody Estate estate) {
        return repository.save(estate);
    }


    @PostMapping("/getestates")
    public Estate getOwner(@RequestBody Estate estate) {
        return repository.findByuseridAndEstatename(estate.getUserid(), estate.getEstatename());
    }

    @PostMapping("/getestate")
    public Estate getEstate(@RequestBody Estate estate) {
        return repository.findByuserid(estate.getUserid());
    }

    @PostMapping("/getestatebyestate")
    public Estate getEstateEstate(@RequestBody Estate estate) {
        return repository.findByestateid(estate.getEstateid());
    }


    @DeleteMapping("/deleteestate")
    public void deleteEstate(@RequestBody Estate estate) {
        repository.delete(estate);
    }


}