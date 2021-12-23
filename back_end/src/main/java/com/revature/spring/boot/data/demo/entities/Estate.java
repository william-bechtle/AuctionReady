package com.revature.spring.boot.data.demo.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "estates",
        uniqueConstraints = @UniqueConstraint(
                name = "estate_unique",
                columnNames = "estate_name"
        ))
public class Estate {
    @Id
    @SequenceGenerator(
            name = "estate_sequence",
            sequenceName = "estate_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "estate_sequence"
    )
    private Long estateid;
    @Column(name = "user_id", nullable = false)
    private int userid;
    @Column(name = "estate_name", nullable = false)
    private String estatename;


}