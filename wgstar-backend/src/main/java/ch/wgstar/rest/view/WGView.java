package ch.wgstar.rest.view;

import ch.wgstar.model.Person;
import ch.wgstar.model.WG;
import ch.wgstar.repository.PersonRepository;
import ch.wgstar.rest.dto.WgDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Getter
@Setter
public class WGView {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonView personView;

    public Collection<WgDto> fromWgList(List<WG> wgList){
        return wgList.stream().map(this::from).collect(Collectors.toList());
    }

    public WgDto from(WG wg) {
        WgDto wgDto = new WgDto();
        wgDto.setId(wg.getId());
        wgDto.setName(wg.getName());
        wgDto.setRooms(wg.getRooms());
        wgDto.setAddress(wg.getAddress());
        wgDto.setPlz(wg.getPlz());
        wgDto.setPlace(wg.getPlace());
        wgDto.setOwner(personView.from(wg.getOwner()));
        wgDto.setPersonList((personView.toPersonDto(wg.getPersonList())));
        return wgDto;
    }

    public WG toWg(WgDto wgDto) {
        WG wg = new WG();
        wg.setId(wgDto.getId());
        wg.setName(wgDto.getName());
        wg.setPlz(wgDto.getPlz());
        wg.setPlace(wgDto.getPlace());
        wg.setRooms(wgDto.getRooms());
        wg.setAddress(wgDto.getAddress());
        Person owner = personRepository.getOne(personView.toPerson(wgDto.getOwner()).getId());
        wg.setOwner(owner);
        List<Person> personListNotFromDb = personView.toPersonen(wgDto.getPersonList());
        List<Person> personListFromDb = new ArrayList<>();
        personListNotFromDb.forEach(person -> personListFromDb.add(personRepository.getOne(person.getId())));
        wg.setPersonList(personListFromDb);
        return wg;
    }
}
