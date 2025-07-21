package com.passamv.financial.service;

import com.passamv.financial.entity.ComponentAmv;
import com.passamv.financial.repository.ComponentAmvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentAmvService {

    @Autowired
    private ComponentAmvRepository componentAmvRepository;

    public List<ComponentAmv> getComponentsAmv() {
        return componentAmvRepository.findAll();
    }

}
