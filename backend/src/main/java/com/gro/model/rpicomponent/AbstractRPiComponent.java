package com.gro.model.rpicomponent;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gro.model.rpipin.RPiPin;

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type", discriminatorType=DiscriminatorType.STRING)
@Table(name="rpi_component")
public abstract class AbstractRPiComponent implements Serializable {
    
    private static final long serialVersionUID = -9072676419360409759L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    private String alias;
    
    @OneToMany(mappedBy="component")
    @JsonIgnoreProperties(value={"component"})
    private List<RPiPin> pins;
    
    // for returning discriminator column
    @Column(name="type", insertable = false, updatable = false)
    private String type;
    
    public AbstractRPiComponent() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public List<RPiPin> getPins() {
        return pins;
    }

    public void setPins(List<RPiPin> pins) {
        this.pins = pins;
    }
    
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, alias);
    }

    @Override
    public boolean equals(Object obj) {
        
        if (this == obj)
            return true;
        if (!(obj instanceof AbstractRPiComponent))
            return false;
        
        AbstractRPiComponent comp = (AbstractRPiComponent) obj;
        
        return Objects.equals(this.id, comp.id) &&
               Objects.equals(this.alias, alias);
        
    }
    
    
    
}
