package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
public class Invitation extends BaseEntity {
    @ManyToOne
    private Person invitedPerson;

    @ManyToOne
    private WG invitingWg;

    private boolean done;
}
