package com.revature.spring.boot.data.demo.repositories;

import com.revature.spring.boot.data.demo.entities.Estate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstateRepository extends JpaRepository<Estate, Long> {
    Estate findByuseridAndEstatename(Integer userid, String estatename);
    Estate findByuserid(int userid);
    Estate findByestateid(Long estateid);
}
