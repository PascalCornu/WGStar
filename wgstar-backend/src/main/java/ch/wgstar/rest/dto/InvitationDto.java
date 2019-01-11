package ch.wgstar.rest.dto;

import ch.wgstar.rest.view.PersonView;
import ch.wgstar.rest.view.WGView;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvitationDto {
    private Long id;
    private PersonDto invitingPerson;
    private WgDto invitingWg;
    private boolean done;

    public InvitationDto() {
    }

    public InvitationDto(Long id, PersonDto invitingPerson, WgDto invitingWg, boolean done) {
        this.id = id;
        this.invitingPerson = invitingPerson;
        this.invitingWg = invitingWg;
        this.done = done;
    }
}
