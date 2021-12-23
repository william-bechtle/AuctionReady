package com.revature.spring.boot.data.demo.Controllers;

import com.revature.spring.boot.data.demo.repositories.ItemRepository;
import com.revature.spring.boot.data.demo.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ItemRepository repository;

    @PostMapping("/item")
    public Item saveItem(@RequestBody Item item) {
        return repository.save(item);
    }


    @PostMapping("/getitems")
    public List<Item> getItem(@RequestBody Item item) {
        return repository.findByestateid(item.getEstateid());
    }

    @PostMapping("/getitemsbycat")
    public List<Item> getItemCat(@RequestBody Item item) {
        return repository.findBycategoryAndEstateid(item.getCategory(), item.getEstateid());
    }


    @PostMapping("/deleteitem")
    public void deleteItem(@RequestBody Item item) {
        repository.delete(item);
    }

    @PutMapping("/updateitem")
    public void updateItem(@RequestBody Item item) {
        Item itemnew = repository.findByid(item.getId());
        itemnew.setEstateid(item.getEstateid());
        itemnew.setImagepath(item.getImagepath());
        itemnew.setDescription(item.getDescription());
        itemnew.setCategory(item.getCategory());
        itemnew.setPrice(item.getPrice());
        itemnew.setQuantity(item.getQuantity());
    }




}