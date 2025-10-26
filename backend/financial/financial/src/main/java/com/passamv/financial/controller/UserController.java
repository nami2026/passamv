package com.passamv.financial.controller;

import com.passamv.financial.dto.UserDto;
import com.passamv.financial.dto.UserRQ;
import com.passamv.financial.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://passamv.netlify.app", allowCredentials = "true")
@RestController
@RequestMapping("api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/{email}")
    public UserDto getUser(@PathVariable("email") String email){
        return userService.getUser(email);
    }

}
