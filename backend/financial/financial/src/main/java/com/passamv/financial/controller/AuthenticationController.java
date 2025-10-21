package com.passamv.financial.controller;

import com.passamv.financial.config.JwtAuthenticationFilter;
import com.passamv.financial.dto.*;
import com.passamv.financial.service.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);


    @PostMapping("/signin")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response){
        try {
            String email = authenticationService.login(loginRequest, response);
            StringBuilder stringBuilder = new StringBuilder(email);

            return new ResponseEntity<>(LoginResponse.builder()
                    .responseCode(String.valueOf(HttpStatus.OK.value()))
                    .responseMsg(stringBuilder.append(" signed in").toString())
                    .build(), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(LoginResponse.builder()
                    .responseCode(String.valueOf(HttpStatus.UNAUTHORIZED.value()))
                    .responseMsg(e.getMessage())
                    .build(), HttpStatus.UNAUTHORIZED);
        }

    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest, HttpServletRequest request){
        try {
            authenticationService.registerAccount(signupRequest);
            return new ResponseEntity<>(SignupResponse.builder()
                    .responseCode(String.valueOf(HttpStatus.CREATED.value()))
                    .responseMsg("Account registered.")
                    .build(), HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }

    }
    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser(HttpServletResponse response) {
        authenticationService.logoutUser(response);
        return new ResponseEntity(LogoutResponse.builder().message("You have been signed out!").build(), HttpStatus.OK);
    }
}