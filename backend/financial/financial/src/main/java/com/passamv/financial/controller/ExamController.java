package com.passamv.financial.controller;

import com.passamv.financial.entity.Exam;
import com.passamv.financial.entity.Historical;
import com.passamv.financial.service.ExamService;
import com.passamv.financial.service.HistoricalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://passamv.netlify.app", allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/")
public class ExamController {

    @Autowired
    private ExamService examService;

    @PostMapping("/save-exam")
    public Exam save(@RequestBody Exam exam) {
        return examService.save(exam);
    }


}
