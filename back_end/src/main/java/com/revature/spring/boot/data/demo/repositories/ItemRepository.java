package com.revature.spring.boot.data.demo.repositories;

import com.revature.spring.boot.data.demo.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByestateid(int estate_id);
    Item findByid(Long id);
    List<Item> findBycategoryAndEstateid(String category, int estate_id);
}