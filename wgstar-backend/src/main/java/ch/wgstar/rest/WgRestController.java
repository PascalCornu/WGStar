package ch.wgstar.rest;

import ch.wgstar.model.WG;
import ch.wgstar.repository.WgRepository;
import ch.wgstar.rest.view.WGView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;

@RestController
public class WgRestController {
    @Autowired
    private WgRepository wgRepository;

    @RequestMapping(value = "/wg/all", method = RequestMethod.GET)
    public Collection<WGView> getAllWg() {
        return WGView.fromWgList(wgRepository.findAll());
    }

    @RequestMapping(value = "/wg/save", method = RequestMethod.POST)
    public void saveWg(@RequestBody WGView wgView) {
        wgRepository.save(WGView.toWg(wgView));
    }
}
