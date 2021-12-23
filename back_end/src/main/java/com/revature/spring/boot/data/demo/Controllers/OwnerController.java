package com.revature.spring.boot.data.demo.Controllers;

import com.revature.spring.boot.data.demo.repositories.OwnerRepository;
import com.revature.spring.boot.data.demo.entities.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OwnerController {

    @Autowired
    private OwnerRepository repository;

    @PostMapping("/owners")
    public Owner saveOwners(@RequestBody Owner owner) {
        return repository.save(owner);
    }


    @PostMapping("/ownersverify")
    public Owner getOwner(@RequestBody Owner owner) {
        return repository.findByusernameAndPassword(owner.getUsername(), owner.getPassword());
    }
}