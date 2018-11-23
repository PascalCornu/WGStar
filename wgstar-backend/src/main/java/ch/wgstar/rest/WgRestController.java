package ch.wgstar.rest;

import ch.wgstar.model.WG;
import ch.wgstar.repository.WgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class WgRestController {
    @Autowired
    private WgRepository wgRepository;

    @RequestMapping(value = "/wg/all", method = RequestMethod.GET)
    public List<WG> getAllWg() {
        return wgRepository.findAll();
    }

    @RequestMapping(value = "/wg/save", method = RequestMethod.POST)
    public void saveWg(@RequestBody Map<String, Object> payload) {
        /*WG wg = wgRepository.getOne((Long) payload.get("id"));
        if(wg == null){
            wg = new WG();
        }*/
        WG wg = new WG();
        wg.setName((String) payload.get("name"));
        wg.setAddress((String) payload.get("address"));
        wg.setPlz((int) payload.get("plz"));
        wg.setPlace((String) payload.get("place"));
        wg.setRooms((int) payload.get("rooms"));
        wgRepository.save(wg);
    }
}
