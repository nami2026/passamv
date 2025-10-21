package com.passamv.financial.dto;

import lombok.Builder;

public class UserDto {

    private Integer id;
    private String email;

    UserDto(){}

    public UserDto(String email, Integer id) {
        this.email = email;
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
