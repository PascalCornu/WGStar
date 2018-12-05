package ch.wgstar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 20.11.2018
 * Main Klasse für den Start
 * Spring boot config for the application
 */
@RestController
@SpringBootApplication
public class WgstarApp {

    public static void main(String[] args) {
        SpringApplication.run(WgstarApp.class, args);
    }
}
