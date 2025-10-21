package com.passamv.financial.dto;

import com.passamv.financial.entity.HistoricalPK;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import lombok.Data;
import lombok.Setter;

import java.util.Date;

@Setter
@Data
public class HistoricalDto {

    private HistoricalPKDto ids;
    private Integer score;
    private Date startDate;
    private Date endDate;
    private Double totalScore;
    private String status;
    private String wrongAnswersId;
    private String rightAnswersId;

    public HistoricalDto(){}

    public HistoricalDto(Date endDate, HistoricalPKDto ids, Integer score, Date startDate, Double totalScore, String status, String wrongAnswersId, String rightAnswersId) {
        this.endDate = endDate;
        this.ids = ids;
        this.score = score;
        this.startDate = startDate;
        this.totalScore = totalScore;
        this.status = status;
        this.wrongAnswersId = wrongAnswersId;
        this.rightAnswersId = rightAnswersId;
    }
}
