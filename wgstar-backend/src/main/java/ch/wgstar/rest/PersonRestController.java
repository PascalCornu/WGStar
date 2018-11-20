package ch.wgstar.rest;

import ch.wgstar.model.Person;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.rest.view.PersonView;
import ch.wgstar.util.JsonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
public class PersonRestController {

    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(value = "/person/all", method = RequestMethod.GET)
    public ResponseEntity<?> getPersonen() throws JsonProcessingException {
        List<Person> list = personRepository.findAll();
        Set<PersonView> collection = list.stream().map(PersonView::from).collect(Collectors.toSet());
        String result = JsonUtil.writeValueAsString(collection);
        return new ResponseEntity<>(result, HttpUtils.headers(), HttpStatus.OK);
    }

    @RequestMapping(value = "/person/save", method = RequestMethod.POST)
    public void saveWg(@RequestBody Map<String, Object> payload) {
        /*WG wg = wgRepository.getOne((Long) payload.get("id"));
        if(wg == null){
            wg = new WG();
        }*/
        Person person = new Person();
        person.setFirstname((String) payload.get("firstname"));
        person.setLastname((String) payload.get("lastname"));
        person.setEmail((String) payload.get("email"));
        person.setPassword((String) payload.get("password"));
        personRepository.save(person);
    }
}
