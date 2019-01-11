package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 16.10.2018
 * Person Entität
 */
@Entity
@Getter
@Setter
public class Person extends BaseEntity {

    @Size(max = FIELD_LENGTH_NORMAL)
    private String lastname;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String firstname;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String email;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String password;

    private boolean hasInvitations;

}
