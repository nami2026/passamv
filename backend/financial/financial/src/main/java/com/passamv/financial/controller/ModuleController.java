package com.passamv.financial.controller;

import com.passamv.financial.entity.ComponentAmv;
import com.passamv.financial.entity.Module;
import com.passamv.financial.service.ComponentAmvService;
import com.passamv.financial.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    @GetMapping("/modules")
    public List<Module> getModules() {
        return moduleService.getModules();
    }

}
