package com.passamv.financial.service;

import com.passamv.financial.dto.UserDto;
import com.passamv.financial.entity.Module;
import com.passamv.financial.entity.User;
import com.passamv.financial.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDto getUser(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        return new UserDto(user.getEmail(), user.getId());
    }

}
