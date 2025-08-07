package com.passamv.financial.controller;

import com.passamv.financial.entity.Historical;
import com.passamv.financial.entity.Item;
import com.passamv.financial.service.HistoricalService;
import com.passamv.financial.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public List<Item> save() {
        return itemService.findAll();
    }

}
