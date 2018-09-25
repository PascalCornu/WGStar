package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.Size;

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
}
