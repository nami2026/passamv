package com.passamv.financial.service;

import com.passamv.financial.entity.Exam;
import com.passamv.financial.entity.Historical;
import com.passamv.financial.repository.ContentRepository;
import com.passamv.financial.repository.ExamRepository;
import com.passamv.financial.repository.HistoricalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoricalService {

    @Autowired
    private HistoricalRepository historicalRepository;

    public Historical save(Historical historical) {
        return historicalRepository.save(historical);
    }

}
