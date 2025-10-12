package com.passamv.financial.service;

import com.passamv.financial.dto.ContentDto;
import com.passamv.financial.dto.ModuleDto;
import com.passamv.financial.entity.Content;
import com.passamv.financial.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class ContentService {

    @Autowired
    private ContentRepository contentRepository;

    public List<ContentDto> getContents() {
        List<Content> contents =  contentRepository.findAll();
        /*contents = contents.stream()
                .peek(c -> {
                    String encodedString = Base64.getEncoder().encodeToString(c.getFile());
                    c.setFile(Base64.getDecoder().decode(encodedString));
                })
                .toList();*/
        return mapToDto(contents);
    }

    private List<ContentDto> mapToDto(List<Content> contents) {
        List<ContentDto> contentDtos = new ArrayList<>();
        for (Content content: contents) {
            ContentDto contentDto = new ContentDto();
            ModuleDto moduleDto = new ModuleDto();
            moduleDto.setId(content.getModule().getId());
            moduleDto.setName(content.getModule().getName());
            contentDto.setModule(moduleDto);
            contentDto.setId(content.getId());
            contentDto.setName(content.getName());
            contentDto.setFile(content.getFile());
            contentDto.setTitle(content.getTitle());
            contentDto.setColorName(content.getColorName());
            contentDtos.add(contentDto);
        }

        return contentDtos;
    }

}
