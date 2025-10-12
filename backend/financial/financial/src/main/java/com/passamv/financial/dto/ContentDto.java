package com.passamv.financial.dto;

import lombok.Data;
import lombok.Setter;

@Setter
@Data
public class ContentDto {

    private int id;
    private String name;
    private String file;
    private String colorName;
    private String title;
    private ModuleDto module;

    public ContentDto() {}

    public ContentDto(int id, String name, String file, String colorName, String title, ModuleDto module) {
        this.id = id;
        this.name = name;
        this.file = file;
        this.colorName = colorName;
        this.title = title;
        this.module = module;
    }
}
