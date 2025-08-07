package com.passamv.financial.service;

import com.passamv.financial.entity.Content;
import com.passamv.financial.entity.Module;
import com.passamv.financial.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    public List<Module> getModules() {
        return moduleRepository.findAll();
    }

}
