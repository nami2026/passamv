package com.passamv.financial.service;

import com.passamv.financial.entity.Area;
import com.passamv.financial.entity.Module;
import com.passamv.financial.repository.AreaRepository;
import com.passamv.financial.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService {

    @Autowired
    private AreaRepository areaRepository;

    public List<Area> getAreas() {
        return areaRepository.findAll();
    }

    public Area getById(int id) {
        return areaRepository.findById(id).get();
    }

}
