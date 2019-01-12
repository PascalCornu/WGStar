package ch.wgstar.rest.view;

import ch.wgstar.model.Invitation;
import ch.wgstar.model.Person;
import ch.wgstar.model.WG;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.repository.WgRepository;
import ch.wgstar.rest.dto.InvitationDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@Getter
@Setter
public class InvitationView {

    @Autowired
    private WGView wgView;

    @Autowired
    private PersonView personView;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private WgRepository wgRepository;

    public InvitationDto from(Invitation invitation) {
        InvitationDto invitationDto = new InvitationDto();
        invitationDto.setId(invitation.getId());
        invitationDto.setInvitedPerson(personView.from(invitation.getInvitedPerson()));
        invitationDto.setInvitingWg(wgView.from(invitation.getInvitingWg()));
        invitationDto.setDone(invitation.isDone());
        return invitationDto;
    }

    public List<InvitationDto> toInvitationDtos(List<Invitation> personen){
        return personen.stream().map(this::from).collect(Collectors.toList());
    }

    public Invitation toInvitation(InvitationDto invitationDto) {
        Invitation invitation = new Invitation();
        invitation.setId(invitationDto.getId());
        Person personToInvite = personRepository.getOne(personView.toPerson(invitationDto.getInvitedPerson()).getId());
        invitation.setInvitedPerson(personToInvite);
        WG invitingWg = wgRepository.getOne(wgView.toWg(invitationDto.getInvitingWg()).getId());
        invitation.setInvitingWg(invitingWg);
        invitation.setDone(invitationDto.isDone());
        return invitation;
    }
}
