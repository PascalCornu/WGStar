package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 16.10.2018
 * WG Entität
 */
@Entity
@Getter
@Setter
public class WG extends BaseEntity{
    @Size(max = FIELD_LENGTH_NORMAL)
    private String name;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String address;

    @Min(1)
    private int plz;

    @Size(max = FIELD_LENGTH_NORMAL)
    private String place;

    @Min(1)
    private int rooms;
}
