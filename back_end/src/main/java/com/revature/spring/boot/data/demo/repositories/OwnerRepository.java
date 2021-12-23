package com.revature.spring.boot.data.demo.repositories;

import com.revature.spring.boot.data.demo.entities.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Long> {
    List<Owner> findByusername(String username);
    Owner findByusernameAndPassword(String username, String password);


}
