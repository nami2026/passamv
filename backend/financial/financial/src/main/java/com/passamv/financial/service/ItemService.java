package com.passamv.financial.service;

import com.passamv.financial.entity.Item;
import com.passamv.financial.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> findAll() {
        return itemRepository.findAll();
    }


}
