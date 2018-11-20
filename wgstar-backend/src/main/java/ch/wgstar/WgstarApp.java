package ch.wgstar;

import ch.wgstar.model.Person;
import ch.wgstar.model.WG;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.repository.WgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Spring boot config for the application
 */
@RestController
@SpringBootApplication
public class WgstarApp {
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private WgRepository wgRepository;

    public static void main(String[] args) {
        SpringApplication.run(WgstarApp.class, args);
    }

    @RequestMapping("/app")
    String home() {
        Person person = new Person();
        person.setLastname("Borter");
        person.setFirstname("Florian");
        person.setEmail("florian.borter@sbb.ch");
        personRepository.save(person);

        WG wg = new WG();
        wg.setName("miniWG");
        wg.setAddress("testadresse");
        wg.setPlz(3000);
        wg.setPlace("Bern");
        wg.setRooms(4);
        wgRepository.save(wg);

        return "IF Best; Jeeeee Shesh";
    }
}
