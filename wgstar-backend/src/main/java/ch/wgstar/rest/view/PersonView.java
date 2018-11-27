package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import lombok.Builder;
import lombok.Value;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Value
@Builder
public class PersonView {
    Long id;
    String lastname;
    String firstname;
    String email;
    String password;
    Long version;

    public static PersonView from(Person person) {
        return builder()
                .id(person.getId())
                .lastname(person.getLastname())
                .firstname(person.getFirstname())
                .email(person.getEmail())
                .password(person.getPassword())
                .build();
    }

    private static Person toPerson(PersonView personView) {
        Person person = new Person();
        person.setId(personView.getId());
        person.setLastname(personView.getLastname());
        person.setFirstname(personView.getFirstname());
        person.setEmail(personView.getEmail());
        person.setPassword(personView.getPassword());
        return person;
    }

    public static List<Person> toPersonen(Collection<PersonView> rolleViews) {
        if (rolleViews != null) {
            return rolleViews.stream().map(PersonView::toPerson).collect(Collectors.toList());
        }
        return Collections.EMPTY_LIST;
    }

    public static List<Person> toRollen(Collection<PersonView> personViews) {
        return PersonView.toPersonen(personViews);
    }
}
