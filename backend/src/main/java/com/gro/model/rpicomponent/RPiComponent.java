package com.gro.model.rpicomponent;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class RPiComponent implements Serializable {
    
    private static final long serialVersionUID = -9072676419360409759L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    private String alias;
    
    @Enumerated(EnumType.STRING)
    @NotNull
    private RPiComponentType type;
    
    @OneToMany(mappedBy="component")
    @JsonIgnoreProperties(value={"component"})
    private List<RPiPin> pins;
    
    public RPiComponent() {}

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

    public RPiComponentType getType() {
        return type;
    }

    public void setType(RPiComponentType type) {
        this.type = type;
    }

    public List<RPiPin> getPins() {
        return pins;
    }

    public void setPins(List<RPiPin> pins) {
        this.pins = pins;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, alias, type);
    }

    @Override
    public boolean equals(Object obj) {
        
        if (this == obj)
            return true;
        if (!(obj instanceof RPiComponent))
            return false;
        
        RPiComponent comp = (RPiComponent) obj;
        
        return Objects.equals(this.id, comp.id) &&
               Objects.equals(this.alias, comp.alias) &&
               Objects.equals(this.type, comp.type);
        
    }
    
    
    
}
