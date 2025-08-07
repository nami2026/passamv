package com.passamv.financial.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class HistoricalPK {

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "exam_id")
    private Integer examId;

    @Column(name = "area_id")
    private Integer areaId;

}
