package com.passamv.financial.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class AreaModulePK {

    @Column(name = "area_id")
    private Integer areaId;

    @Column(name = "module_id")
    private Integer moduleId;

}
