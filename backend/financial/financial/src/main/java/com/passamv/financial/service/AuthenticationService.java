package com.passamv.financial.service;

import com.passamv.financial.dto.LoginRequest;
import com.passamv.financial.dto.SignupRequest;
import com.passamv.financial.entity.Role;
import com.passamv.financial.entity.User;
import com.passamv.financial.enums.ERole;
import com.passamv.financial.repository.RoleRepository;
import com.passamv.financial.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RoleRepository roleRepository;

    public AuthenticationService(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, UserRepository userRepository,  JwtService jwtService, RoleRepository roleRepository) {
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.roleRepository = roleRepository;
    }
    public String login(LoginRequest loginRequest, HttpServletResponse response) {

        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.getEmail(), loginRequest.getPassword());
        Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);

        SecurityContextHolder.getContext().setAuthentication(authenticationResponse);
        jwtService.generateToken(loginRequest.getEmail(), response);
        UserDetails userDetails = (UserDetails) authenticationResponse.getPrincipal();
        return userDetails.getUsername();
    }

    public void registerAccount(SignupRequest signupRequest){
        if(userRepository.existsByEmail(signupRequest.getEmail())){
            throw new EntityExistsException("Email already used");
        }
        // create user object
        User user = new User(signupRequest.getFirstName(), signupRequest.getSecondName(),
                signupRequest.getFirstLastname(), signupRequest.getSecondLastname(),
                signupRequest.getEmail(), passwordEncoder.encode(signupRequest.getPassword()));
        Role role = roleRepository.findByName(ERole.USUARIO.name()).orElse(null);
        user.setRole(role);
        userRepository.save(user);

    }
    public void logoutUser(HttpServletResponse response){
        jwtService.removeTokenFromCookie(response);
    }
}