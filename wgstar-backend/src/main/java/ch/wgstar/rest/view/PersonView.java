package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import lombok.Builder;
import lombok.Value;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

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
    boolean hasInvitations;
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

    public static Person toPerson(PersonView personView) {
        Person person = new Person();
        person.setId(personView.getId());
        person.setLastname(personView.getLastname());
        person.setFirstname(personView.getFirstname());
        person.setEmail(personView.getEmail());
        person.setPassword(personView.getPassword());
        person.setHasInvitations(personView.hasInvitations);
        return person;
    }

    public static Collection<PersonView> toPersonViews(List<Person> personen){
        return personen.stream().map(PersonView::from).collect(Collectors.toList());
    }

    public static List<Person> toPersonen(Collection<PersonView> personViews) {
        if (personViews != null) {
            return personViews.stream().map(PersonView::toPerson).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }
}
