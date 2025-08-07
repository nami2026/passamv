package com.passamv.financial.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "AREAXMODULE")
public class AreaModule {

    @EmbeddedId
    private AreaModulePK id;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("area_id")
    @JoinColumn(name = "area_id", referencedColumnName = "area_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Area area;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("module_id")
    @JoinColumn(name = "module_id", referencedColumnName = "module_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Module module;

    @Column(name = "tot_question")
    private Integer totalQuestion;


}
