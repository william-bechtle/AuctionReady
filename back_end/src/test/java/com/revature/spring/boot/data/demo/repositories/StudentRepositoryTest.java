package com.revature.spring.boot.data.demo.repositories;

import com.revature.spring.boot.data.demo.entities.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Locale;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StudentRepositoryTest {

    @Autowired
    private OwnerRepository repository2;

    @Autowired
    private EstateRepository repository3;

    @Autowired
    private ItemRepository repository4;


    @Test
    public void saveOwner(){
        Owner owner = Owner.builder()
                .username("dan")
                .password("dan")
                .name("dan")
                .estate(1)
                .build();
        repository2.save(owner);
    }

    @Test
    public void saveEstate(){
        Estate estate = Estate.builder()
                .userid(9999)
                .estatename("estate")
                .build();
        repository3.save(estate);
    }

    @Test
    public void saveItem(){
        Item item = Item.builder()
                .estateid(3)
                .imagepath("../public/images")
                .description("Beautiful Antiques")
                .category("Antiques")
                .price("100-200")
                .lotno(55)
                .quantity(1)
                .build();
        repository4.save(item);

    }
}