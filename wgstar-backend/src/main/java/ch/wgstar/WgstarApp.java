package ch.wgstar;

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
    public static void main(String[] args) {
        SpringApplication.run(WgstarApp.class, args);
    }

    @RequestMapping("/app")
    String home() {
        return "Hello World!";
    }
}
