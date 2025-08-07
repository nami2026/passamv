package com.passamv.financial.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.List;

@Data
@Entity
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "area_id")
    private int id;

    private String name;

    @OneToMany(mappedBy = "area")
    private List<AreaModule> areaPerModules;

}
