package ch.wgstar.repository;

import ch.wgstar.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 16.10.2018
 * Person Repository
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

}
