package ch.wgstar.repository;

import ch.wgstar.model.WG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WgRepository extends JpaRepository<WG, Long> {

}