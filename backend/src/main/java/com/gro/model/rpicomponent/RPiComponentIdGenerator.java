package com.gro.model.rpicomponent;

import java.io.Serializable;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RPiComponentIdGenerator implements IdentifierGenerator {
    
    private Logger log = LoggerFactory.getLogger(RPiComponentIdGenerator.class);
    private static final String QUERY = "{? = call sequence_nextval()}";
    
    @Override
    public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
        
        Integer id = null;
        try {
            Connection connection = session.connection();
            CallableStatement statement = connection.prepareCall(QUERY);
            statement.registerOutParameter(1, java.sql.Types.INTEGER);
            statement.execute();
            id = statement.getInt(1);
        } catch(SQLException e) {
            log.error("Error getting id", e);
            throw new HibernateException(e);
        }
        return id;
    }

}
