package ch.wgstar.rest;

import ch.wgstar.model.Person;
import ch.wgstar.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonRestController {

    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(value = "/personen", method = RequestMethod.GET)
    public List<Person> getPersonen() {
        return personRepository.findAll();
    }
}
