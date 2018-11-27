package ch.wgstar.rest.view;

import ch.wgstar.model.WG;
import lombok.Builder;
import lombok.Value;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Value
@Builder
public class WGView {
    Long id;
    int rooms;
    String name;
    String address;
    int plz;
    String place;
    PersonView owner;
    Collection<PersonView> personList;

    public static Collection<WGView> fromWgList(List<WG> wgList){
        return wgList.stream().map(WGView::from).collect(Collectors.toList());
    }

    public static WGView from(WG wg) {
        return builder()
                .id(wg.getId())
                .rooms(wg.getRooms())
                .address(wg.getAddress())
                .plz(wg.getPlz())
                .place(wg.getPlace())
                .owner(PersonView.from(wg.getOwner()))
                .personList(PersonView.toPersonViews(wg.getPersonList()))
                .build();
    }

    public static WG toWg(WGView wgView) {
        WG wg = new WG();
        wg.setId(wgView.getId());
        wg.setName(wgView.getName());
        wg.setPlz(wgView.getPlz());
        wg.setPlace(wgView.getPlace());
        wg.setRooms(wgView.getRooms());
        wg.setOwner(PersonView.toPerson(wgView.getOwner()));
        wg.setPersonList(PersonView.toPersonen(wgView.getPersonList()));
        return wg;
    }
}
