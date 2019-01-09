package ch.wgstar.rest.view;

import ch.wgstar.model.Invitation;
import lombok.Builder;
import lombok.Value;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Value
@Builder
public class InvitationView {
    private Long id;
    private PersonView invitingPerson;
    private WGView invitingWG;
    private boolean done;

    public static InvitationView from(Invitation invitation) {
        return builder()
                .id(invitation.getId())
                .invitingPerson(PersonView.from(invitation.getInvitingPerson()))
                .invitingWG(WGView.from(invitation.getInvitingWg()))
                .done(invitation.isDone())
                .build();
    }

    public static Collection<InvitationView> toInvitationViews(List<Invitation> personen){
        return personen.stream().map(InvitationView::from).collect(Collectors.toList());
    }

    public static Invitation toInvitation(InvitationView invitationView) {
        Invitation invitation = new Invitation();
        invitation.setId(invitationView.getId());
        invitation.setInvitingPerson(PersonView.toPerson(invitationView.getInvitingPerson()));
        invitation.setInvitingWg(WGView.toWg(invitationView.getInvitingWG()));
        invitation.setDone(invitationView.isDone());
        return invitation;
    }
}
