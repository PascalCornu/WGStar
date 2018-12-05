package ch.wgstar.repository;

import ch.wgstar.model.WG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 20.11.2018
 * Person Repository
 */
@Repository
public interface WgRepository extends JpaRepository<WG, Long> {

}