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

    public HistoricalPK() {}

    public HistoricalPK(Integer areaId, Integer examId, Integer userId) {
        this.areaId = areaId;
        this.examId = examId;
        this.userId = userId;
    }
}
