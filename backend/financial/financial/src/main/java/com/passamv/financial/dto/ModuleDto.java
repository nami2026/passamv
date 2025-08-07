package com.passamv.financial.dto;

import lombok.Data;

@Data
public class ModuleDto {

    private int id;
    private String name;

    public ModuleDto() {}

    public ModuleDto(int id, String name) {
        this.id = id;
        this.name = name;
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
}
