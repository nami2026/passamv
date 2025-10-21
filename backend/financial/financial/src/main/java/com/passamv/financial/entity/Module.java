package com.passamv.financial.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity(name = "MODULE")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "module_id")
    private int id;

    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "component_amv_id", referencedColumnName = "componentamv_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private ComponentAmv componentAmv;

    @OneToMany(mappedBy = "module")
    private List<AreaModule> areaPerModules;

    //@OneToMany(mappedBy = "module")
    //private List<Content> contents;

    public Module() {}

    public Module(int id, String name, ComponentAmv componentAmv, List<AreaModule> areaPerModules/*, List<Content> contents*/) {
        this.id = id;
        this.name = name;
        this.componentAmv = componentAmv;
        this.areaPerModules = areaPerModules;
        //this.contents = contents;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ComponentAmv getComponentAmv() {
        return componentAmv;
    }

    public void setComponentAmv(ComponentAmv componentAmv) {
        this.componentAmv = componentAmv;
    }

    public List<AreaModule> getAreaPerModules() {
        return areaPerModules;
    }

    public void setAreaPerModules(List<AreaModule> areaPerModules) {
        this.areaPerModules = areaPerModules;
    }

    /*public List<Content> getContents() {
        return contents;
    }

    public void setContents(List<Content> contents) {
        this.contents = contents;
    }*/
}
