package com.revature.spring.boot.data.demo.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(
        name = "owners",
        uniqueConstraints = @UniqueConstraint(
                name = "email_unique",
                columnNames = "username"
        ))
public class Owner {
    @Id
    @SequenceGenerator(
            name = "owner_sequence",
            sequenceName = "owner_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "owner_sequence"
    )
    private Long id;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name= "firstname")
    private String name;
    @Column(name= "estate")
    private Integer estate;


}
