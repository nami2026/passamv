package com.passamv.financial.controller;

import com.passamv.financial.dto.ContentDto;
import com.passamv.financial.entity.ComponentAmv;
import com.passamv.financial.entity.Content;
import com.passamv.financial.service.ComponentAmvService;
import com.passamv.financial.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/contents")
    public List<ContentDto> getContents() {
        return contentService.getContents();
    }

}
