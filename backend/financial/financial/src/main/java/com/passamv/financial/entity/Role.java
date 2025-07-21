package com.passamv.financial.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int id;

    @NotBlank
    private String name;

    @OneToMany(mappedBy = "role",
            cascade = CascadeType.ALL)
    private List<User> user;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<User> getUser() {
        return user;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }
}