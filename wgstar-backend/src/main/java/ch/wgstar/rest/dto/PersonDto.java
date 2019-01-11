package ch.wgstar.rest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDto {
    private Long id;
    private String lastname;
    private String firstname;
    private String email;
    private String password;
    private boolean hasInvitations;
    private Long version;

    public PersonDto() {
    }

    public PersonDto(Long id, String lastname, String firstname, String email, String password, boolean hasInvitations, Long version) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.hasInvitations = hasInvitations;
        this.version = version;
    }
}
