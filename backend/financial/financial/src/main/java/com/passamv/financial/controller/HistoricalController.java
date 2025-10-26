package com.passamv.financial.controller;

import com.passamv.financial.dto.HistoricalDto;
import com.passamv.financial.entity.ComponentAmv;
import com.passamv.financial.entity.Historical;
import com.passamv.financial.service.ComponentAmvService;
import com.passamv.financial.service.HistoricalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://passamv.netlify.app", allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/")
public class HistoricalController {

    @Autowired
    private HistoricalService historicalService;

    @PostMapping("/save-historical")
    public Historical save(@RequestBody HistoricalDto historical) {
        return historicalService.save(historical);
    }

}
