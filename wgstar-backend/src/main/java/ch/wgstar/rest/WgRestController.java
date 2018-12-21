package ch.wgstar.rest;

import ch.wgstar.model.WG;
import ch.wgstar.repository.WgRepository;
import ch.wgstar.rest.view.PersonView;
import ch.wgstar.rest.view.WGView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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

    /**
     * Holt alle Wgs
     * @return wg
     */
    @RequestMapping(value = "/wg/all", method = RequestMethod.GET)
    public List<WG> getAllWg() {
        return wgRepository.findAll();
    }

    /**
     * speichert eine WG
     * @param wgView Daten vom Frontend
     */
    @RequestMapping(value = "/wg/save", method = RequestMethod.POST)
    public void saveWg(@RequestBody WGView wgView) {
        wgRepository.save(WGView.toWg(wgView));
    }
}
