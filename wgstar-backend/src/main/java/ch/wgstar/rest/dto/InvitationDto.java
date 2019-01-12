package ch.wgstar.rest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvitationDto {
    private Long id;
    private PersonDto invitedPerson;
    private WgDto invitingWg;
    private boolean done;

    public InvitationDto() {
    }

    public InvitationDto(Long id, PersonDto invitedPerson, WgDto invitingWg, boolean done) {
        this.id = id;
        this.invitedPerson = invitedPerson;
        this.invitingWg = invitingWg;
        this.done = done;
    }
}
