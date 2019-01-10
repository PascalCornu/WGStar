package ch.wgstar.repository;

import ch.wgstar.model.Person;
import ch.wgstar.model.WG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 20.11.2018
 * Person Repository
 */
@Repository
public interface WgRepository extends JpaRepository<WG, Long> {
    //List<WG> findAllByPersonListContainingOrOwner(Person person);
}