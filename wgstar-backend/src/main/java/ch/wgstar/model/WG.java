package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
public class WG extends BaseEntity{
    @Size(max = FIELD_LENGTH_NORMAL)
    private String name;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String address;

    @Size(max = FIELD_LENGTH_NORMAL)
    private int plz;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String place;

    @Size(max = FIELD_LENGTH_NORMAL)
    private int rooms;
}
