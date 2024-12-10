package backend.challengeBackend.repository;

import backend.challengeBackend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Product, Long> {

}
