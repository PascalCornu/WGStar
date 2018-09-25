package ch.wgstar;

import ch.wgstar.model.Person;
import ch.wgstar.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Spring boot config for the application
 */
@RestController
@SpringBootApplication
public class WgstarApp {
    @Autowired
    private PersonRepository personRepository;

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
        return "IF Best; Jeeeee Shesh";
    }
}
