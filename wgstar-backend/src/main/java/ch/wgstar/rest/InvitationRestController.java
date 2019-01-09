package ch.wgstar.rest;

import ch.wgstar.repository.InvitationRepository;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.rest.view.InvitationView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class InvitationRestController {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private InvitationRepository invitationRepository;

    @RequestMapping(value = "/invitation/{personId}", method = RequestMethod.GET)
    public Collection<InvitationView> getAllInvitationsOfPerson(@PathVariable Long id) {
        return InvitationView.toInvitationViews(invitationRepository.findAllByInvitingPerson(personRepository.getOne(id)));
    }

    @RequestMapping(value = "/invitation/save", method = RequestMethod.POST)
    public void saveInvitation(@RequestBody InvitationView invitationView) {
        invitationRepository.save(InvitationView.toInvitation(invitationView));
    }
}
