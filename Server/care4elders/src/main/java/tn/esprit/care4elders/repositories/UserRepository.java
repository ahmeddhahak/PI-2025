package tn.esprit.care4elders.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import tn.esprit.care4elders.entities.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
