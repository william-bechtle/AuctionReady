package com.revature.spring.boot.data.demo.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "items")
public class Item {
    @Id
    @SequenceGenerator(
            name = "item_sequence",
            sequenceName = "item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_sequence"
    )
    private Long id;
    @Column(name = "estate_id")
    private int estateid;
    @Column(name = "lot_no")
    private int lotno;
    @Column(name = "image_path")
    private String imagepath;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    private String category;
    @Column(name = "price")
    private String price;
    @Column(name = "quantity")
    private int quantity;


}
