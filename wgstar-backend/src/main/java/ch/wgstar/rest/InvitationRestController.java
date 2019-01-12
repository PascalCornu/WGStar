package ch.wgstar.rest;

import ch.wgstar.model.Invitation;
import ch.wgstar.repository.InvitationRepository;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.rest.dto.InvitationDto;
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

    @Autowired
    private InvitationView invitationView;

    @RequestMapping(value = "/invitation/{personId}", method = RequestMethod.GET)
    public Collection<InvitationDto> getAllInvitationsOfPerson(@PathVariable Long personId) {
        return invitationView.toInvitationDtos(invitationRepository.findAllByInvitedPersonAndDoneFalse(personRepository.getOne(personId)));
    }

    @RequestMapping(value = "/invitation/save", method = RequestMethod.POST)
    public void saveInvitation(@RequestBody InvitationDto invitationDto) {
        invitationRepository.saveAndFlush(invitationView.toInvitation(invitationDto));
    }

    @RequestMapping(value = "/invitation/update", method = RequestMethod.PUT)
    public void updateInvitation(@RequestBody InvitationDto invitationDto) {
        Invitation invitation = invitationView.toInvitation(invitationDto);
        Invitation invitationToUpdate = invitationRepository.getOne(invitation.getId());
        invitationToUpdate.setDone(invitation.isDone());
        invitationRepository.saveAndFlush(invitationToUpdate);
    }
}
