package com.passamv.financial.dto;

import com.passamv.financial.entity.HistoricalPK;
import lombok.Data;
import lombok.Setter;

@Data
@Setter
public class HistoricalPKDto {

    private Integer userId;
    private Integer examId;
    private Integer areaId;

    public HistoricalPKDto() {}

    public HistoricalPKDto(Integer userId, Integer examId, Integer areaId) {
        this.userId = userId;
        this.examId = examId;
        this.areaId = areaId;
    }
}
