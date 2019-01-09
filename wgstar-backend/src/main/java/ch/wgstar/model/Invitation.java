package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
public class Invitation extends BaseEntity {
    @OneToOne
    private Person invitingPerson;

    @OneToOne
    private WG invitingWg;

    private boolean done;
}
