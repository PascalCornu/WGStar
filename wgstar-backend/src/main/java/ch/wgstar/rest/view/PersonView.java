package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import lombok.Builder;
import lombok.Value;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 23.10.2018
 * Person View ist ein DTO für ein Personen Objekt
 */
@Value
@Builder
public class PersonView {
    Long id;
    String lastname;
    String firstname;
    String email;
    String password;
    Long version;

    /**
     * Erstllt einen View bzw. ein DTO vom Personenobjekt
     * @param person das Objekt zur Konvertierung
     * @return das DTO
     */
    public static PersonView from(Person person) {
        return builder()
                .id(person.getId())
                .lastname(person.getLastname())
                .firstname(person.getFirstname())
                .email(person.getEmail())
                .password(person.getPassword())
                .build();
    }
}
