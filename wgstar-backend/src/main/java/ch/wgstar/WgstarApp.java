package ch.wgstar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Spring boot config for the application
 */
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class WgstarApp {
    public static void main(String[] args) {
        SpringApplication.run(WgstarApp.class, args);
    }

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }
}
