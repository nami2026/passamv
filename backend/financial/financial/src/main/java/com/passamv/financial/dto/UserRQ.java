package com.passamv.financial.dto;

import lombok.Builder;

@Builder
public class UserRQ {

    private String email;

    UserRQ(){}

    public UserRQ(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
