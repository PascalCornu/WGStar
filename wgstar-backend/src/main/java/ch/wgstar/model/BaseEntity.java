package ch.wgstar.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@MappedSuperclass
public class BaseEntity {
    public static final int FIELD_LENGTH_NORMAL = 255;
    public static final int FIELD_LENGTH_LONG = 4000;

    @Id
    @GeneratedValue
    private Long id;
}