package com.passamv.financial.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ContentDto {

    private int id;
    private String name;
    private byte[] file;
    private ModuleDto module;

    public ContentDto() {}

    public ContentDto(int id, String name, byte[] file, ModuleDto module) {
        this.id = id;
        this.name = name;
        this.file = file;
        this.module = module;
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

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public ModuleDto getModule() {
        return module;
    }

    public void setModule(ModuleDto module) {
        this.module = module;
    }
}
