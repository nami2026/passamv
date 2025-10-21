package com.passamv.financial.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity(name = "AREA")
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "area_id")
    private int id;

    private String name;

    @OneToMany(mappedBy = "area")
    private List<AreaModule> areaPerModules;

}
