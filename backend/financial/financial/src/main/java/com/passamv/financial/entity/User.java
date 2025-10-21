package com.passamv.financial.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    @NotBlank(message = "First name is required")
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @NotBlank(message = "First lastname is required")
    @Column(name = "first_lastname")
    private String firstLastname;

    @Column(name = "second_lastname")
    private String secondLastname;

    @NotBlank(message = "email is required")
    @Email
    @Column(unique = true)
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "role_id")
    private Role role;

    public User() {}

    public User(String firstName, String secondName, String firstLastname, String secondLastname, String email, String password) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastname = firstLastname;
        this.secondLastname = secondLastname;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public String getFirstLastname() {
        return firstLastname;
    }

    public String getSecondLastname() {
        return secondLastname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Role getRole() {
        return role;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public void setFirstLastname(String firstLastname) {
        this.firstLastname = firstLastname;
    }

    public void setSecondLastname(String secondLastname) {
        this.secondLastname = secondLastname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
