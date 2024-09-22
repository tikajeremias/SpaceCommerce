package main.java.com.example.repositories;

import com.tu_dominio.tu_proyecto.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
