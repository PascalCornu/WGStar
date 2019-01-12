package ch.wgstar.rest;

import ch.wgstar.model.Person;
import ch.wgstar.model.WG;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.repository.WgRepository;
import ch.wgstar.rest.dto.WgDto;
import ch.wgstar.rest.view.WGView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 20.11.2018
 * RestController für WGs
 */
@RestController
public class WgRestController {
    /**
     * WgRepo zum speichern und lesen aus der DB
     */
    @Autowired
    private WgRepository wgRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    private WGView wgView;

    /**
     * Holt alle Wgs
     * @return wg
     */
    @RequestMapping(value = "/wg/get/{personId}", method = RequestMethod.GET)
    public Collection<WgDto> getAllWg(@PathVariable Long personId) {
        Person person = personRepository.getOne(personId);
        List<WG> allWgsOfUser = new ArrayList<>();
        List<WG> allWgs = wgRepository.findAll();
        allWgs.forEach(wg -> {
            if(wg.getOwner() == person || wg.getPersonList().contains(person)){
                allWgsOfUser.add(wg);
            }
        });

        return wgView.fromWgList(allWgsOfUser);
    }

    /**
     * speichert eine WG
     * @param wgDto Daten vom Frontend
     */
    @RequestMapping(value = "/wg/save", method = RequestMethod.POST)
    public WgDto saveWg(@RequestBody WgDto wgDto) {
        WG wg = wgView.toWg(wgDto);
        wg = wgRepository.saveAndFlush(wg);
        return wgView.from(wg);
    }

    @RequestMapping(value = "/wg/update", method = RequestMethod.PUT)
    public void updateWg(@RequestBody WgDto wgDto) {
        WG wg = wgView.toWg(wgDto);
        WG wgtoUpdate = wgRepository.getOne(wg.getId());

        List<Person> personList = new ArrayList<>();
        wg.getPersonList().forEach(person -> personList.add(personRepository.getOne(person.getId())));
        wgtoUpdate.setPersonList(personList);

        wgRepository.saveAndFlush(wgtoUpdate);
    }
}
