package com.passamv.financial.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity(name = "EXAM")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exam_id")
    private int id;

    private Date date;

    @OneToMany(mappedBy = "exam")
    private List<Historical> historicals;

    public Exam() {}

    public Exam(int id, Date date, List<Historical> historicals) {
        this.id = id;
        this.date = date;
        this.historicals = historicals;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Historical> getHistoricals() {
        return historicals;
    }

    public void setHistoricals(List<Historical> historicals) {
        this.historicals = historicals;
    }
}
