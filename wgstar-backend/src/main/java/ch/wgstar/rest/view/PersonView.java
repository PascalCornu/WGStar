package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Value;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Value
@Builder
public class PersonView {
    @JsonProperty
    Long id;

    @JsonProperty
    String lastname;

    @JsonProperty
    String firstname;

    @JsonProperty
    String email;

    @JsonProperty
    String password;

    @JsonProperty
    Long version;

    @JsonProperty
    boolean hasInvitations;

    public static PersonView from(Person person) {
        return builder()
                .id(person.getId())
                .lastname(person.getLastname())
                .firstname(person.getFirstname())
                .email(person.getEmail())
                .password(person.getPassword())
                .hasInvitations(person.isHasInvitations())
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
