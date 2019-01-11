package ch.wgstar.rest.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
public class WgDto {
    private Long id;
    private int rooms;
    private String name;
    private String address;
    private int plz;
    private String place;
    private PersonDto owner;
    private Collection<PersonDto> personList;

    public WgDto() {
    }

    public WgDto(Long id, int rooms, String name, String address, int plz, String place, PersonDto owner,
                  Collection<PersonDto> personList) {
        this.id = id;
        this.rooms = rooms;
        this.name = name;
        this.address = address;
        this.plz = plz;
        this.place = place;
        this.owner = owner;
        this.personList = personList;
    }
}
