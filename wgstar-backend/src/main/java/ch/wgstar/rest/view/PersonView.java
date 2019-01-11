package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import ch.wgstar.rest.dto.PersonDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

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
@Component
@Getter
@Setter
public class PersonView {

    /**
     * Erstllt einen View bzw. ein DTO vom Personenobjekt
     * @param person das Objekt zur Konvertierung
     * @return das DTO
     */
    public PersonDto from(Person person) {
        PersonDto personDto = new PersonDto();
        personDto.setId(person.getId());
        personDto.setLastname(person.getLastname());
        personDto.setFirstname(person.getFirstname());
        personDto.setEmail(person.getEmail());
        personDto.setPassword(person.getPassword());
        return personDto;
    }

    public Person toPerson(PersonDto personDto) {
        Person person = new Person();
        person.setId(personDto.getId());
        person.setLastname(personDto.getLastname());
        person.setFirstname(personDto.getFirstname());
        person.setEmail(personDto.getEmail());
        person.setPassword(personDto.getPassword());
        person.setHasInvitations(personDto.isHasInvitations());
        return person;
    }

    public Collection<PersonDto> toPersonDto(List<Person> personen){
        return personen.stream().map(this::from).collect(Collectors.toList());
    }

    public List<Person> toPersonen(Collection<PersonDto> personDtos) {
        if (personDtos != null) {
            return personDtos.stream().map(this::toPerson).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }
}
