----------------------------------------------------------------------
-- TABLE & FUNCTION ARE DROP/CREATED
----------------------------------------------------------------------

-- DROP TABLE IF EXISTS sequence_values ^;
CREATE TABLE IF NOT EXISTS sequence_values (
  id INT AUTO_INCREMENT PRIMARY KEY,
  thread_id INT NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP
) ^;


DROP FUNCTION IF EXISTS sequence_nextval ^;
CREATE FUNCTION sequence_nextval()
RETURNS INTEGER
NOT DETERMINISTIC
MODIFIES SQL DATA
BEGIN
  DECLARE nextval INTEGER;
  INSERT INTO sequence_values (thread_id) VALUE (CONNECTION_ID());
  SELECT id FROM sequence_values ORDER BY created DESC LIMIT 1 INTO nextval;
  RETURN nextval;
END ^;

----------------------------------------------------------------------
-- INSERT USERS FOR TESTING
----------------------------------------------------------------------
--INSERT INTO user (id, username, password, firstname, lastname, email, enabled, last_password_reset_date) 
--VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, NOW()) ^;
--
--INSERT INTO user (id, username, password, firstname, lastname, email, enabled, last_password_reset_date) 
--VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, NOW()) ^;
--
--INSERT INTO user (id, username, password, firstname, lastname, email, enabled, last_password_reset_date) 
--VALUES (3, 'disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, NOW()) ^;
--
--INSERT INTO authority (id, name) VALUES (1, 'ROLE_USER') ^;
--INSERT INTO authority (id, name) VALUES (2, 'ROLE_ADMIN') ^;
--
--INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1) ^;
--INSERT INTO user_authority (user_id, authority_id) VALUES (1, 2) ^;
--INSERT INTO user_authority (user_id, authority_id) VALUES (2, 1) ^;
--INSERT INTO user_authority (user_id, authority_id) VALUES (3, 1) ^;
