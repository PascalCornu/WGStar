package ch.wgstar.rest;

import ch.wgstar.repository.PersonRepository;
import ch.wgstar.rest.view.PersonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;

@RestController
public class PersonRestController {

    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(value = "/person/all", method = RequestMethod.GET)
    public Collection<PersonView> getPersonen() {
        return PersonView.toPersonViews(personRepository.findAll());
    }

    @RequestMapping(value = "/person/id", method = RequestMethod.GET)
    public Collection<PersonView> getPersonById() {
        return PersonView.toPersonViews(personRepository.findAll());
    }

    @RequestMapping(value = "/person/save", method = RequestMethod.POST)
    public PersonView saveWg(@RequestBody Map<String, Object> payload) {
        return PersonView.from(personRepository.getOne((Long) payload.get("id")));
    }
}
