package com.passamv.financial.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class SignupResponse {

    private String responseCode;
    private String responseMsg;

}
