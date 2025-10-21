package com.passamv.financial.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.Date;

@Entity(name = "HISTORICAL")
public class Historical {

    @EmbeddedId
    private HistoricalPK id;

    @Column(name = "score")
    private Integer score;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "total_score")
    private Double totalScore;

    @Column(name = "status")
    private String status;

    @Column(name = "wrong_answers_id")
    private String wrongAnswersId;

    @Column(name = "right_answers_id")
    private String rightAnswersId;

    @ManyToOne
    @MapsId("area_id")
    @JoinColumn(name = "area_id", referencedColumnName = "area_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Area area;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;

    @ManyToOne
    @MapsId("exam_id")
    @JoinColumn(name = "exam_id", referencedColumnName = "exam_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Exam exam;

    public Historical() {}

    public Historical(HistoricalPK id, Integer score, Date startDate, Date endDate, Double totalScore, String status, String wrongAnswersId, String rightAnswersId, Area area, User user, Exam exam) {
        this.id = id;
        this.score = score;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalScore = totalScore;
        this.status = status;
        this.wrongAnswersId = wrongAnswersId;
        this.rightAnswersId = rightAnswersId;
        this.area = area;
        this.user = user;
        this.exam = exam;
    }

    public HistoricalPK getId() {
        return id;
    }

    public void setId(HistoricalPK id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Double totalScore) {
        this.totalScore = totalScore;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getWrongAnswersId() {
        return wrongAnswersId;
    }

    public void setWrongAnswersId(String wrongAnswersId) {
        this.wrongAnswersId = wrongAnswersId;
    }

    public String getRightAnswersId() {
        return rightAnswersId;
    }

    public void setRightAnswersId(String rightAnswersId) {
        this.rightAnswersId = rightAnswersId;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }
}
