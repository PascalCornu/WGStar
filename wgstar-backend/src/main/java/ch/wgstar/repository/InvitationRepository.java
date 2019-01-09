package ch.wgstar.repository;

import ch.wgstar.model.Invitation;
import ch.wgstar.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvitationRepository extends JpaRepository<Invitation, Long> {
    List<Invitation> findAllByInvitingPerson(Person invitingPerson);
}
