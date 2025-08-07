use passamv;
SET SQL_SAFE_UPDATES = 0;
#########################################################################

CREATE TABLE COMPONENTAMV(
  componentamv_id INT NOT NULL,
  type VARCHAR(30)
);

ALTER TABLE COMPONENTAMV ADD CONSTRAINT componentamv_pk PRIMARY KEY(componentamv_id);
ALTER TABLE COMPONENTAMV ADD CONSTRAINT componentamv_chk CHECK (type = 'Basico' OR type = 'Especializado');
ALTER TABLE COMPONENTAMV MODIFY componentamv_id int NOT NULL AUTO_INCREMENT;
INSERT INTO COMPONENTAMV (type) VALUES ('Basico'), ('Especializado');
SELECT * FROM COMPONENTAMV;
#########################################################################

CREATE TABLE MODULE(
  module_id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  component_amv_id INT NOT NULL
);

ALTER TABLE MODULE ADD CONSTRAINT module_pk PRIMARY KEY(id);
ALTER TABLE MODULE MODIFY id int NOT NULL AUTO_INCREMENT;
ALTER TABLE MODULE ADD CONSTRAINT module_component_amv_fk FOREIGN KEY (component_amv_id) REFERENCES COMPONENTAMV(componentamv_id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO MODULE (id, name, component_amv_id) VALUES
(1,	'Regulación', 1), (2, 'Autorregulación', 1), (3, 'Ética', 1), (4, 'Análisis Económico', 1), (5,	'Riesgos', 1), (6, 'Matemática Financiera', 1), 
(7,	'Fondos de Inversión Colectiva', 2), (8, 'Fondos de Pensiones', 2), (9,	'Renta Fija', 2), (10, 'Renta Variable', 2), 
(11, 'Derivados', 2), (12, 'Regulación Cambiaria', 2), (13, 'Administración de Portafolios', 2);

SELECT * FROM MODULE;

#########################################################################
CREATE TABLE AREA (
  area_id INT NOT NULL,
  name VARCHAR(20) NOT NULL
);
ALTER TABLE AREA ADD CONSTRAINT area_pk PRIMARY KEY(area_id);
ALTER TABLE AREA MODIFY area_id int NOT NULL AUTO_INCREMENT;
INSERT INTO AREA (name) VALUES ('Asesor Financiero'), ('Directivo');
SELECT * FROM AREA;
#########################################################################

CREATE TABLE AREAXMODULE (
  area_id INT NOT NULL,
  module_id INT NOT NULL,
  tot_question INT NOT NULL
);
ALTER TABLE AREAXMODULE ADD CONSTRAINT areaxmodule_pk PRIMARY KEY(area_id, module_id);
ALTER TABLE AREAXMODULE ADD CONSTRAINT area_areaxmodule_fk FOREIGN KEY (area_id) REFERENCES AREA(area_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE AREAXMODULE ADD CONSTRAINT module_areaxmodule_fk FOREIGN KEY (module_id) REFERENCES MODULE(module_id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO AREAXMODULE (area_id, module_id, tot_question) VALUES (1, 1, 20), (1, 2, 5), (1, 3, 15), (1, 4, 13), (1, 5, 15), 
 (1, 6, 10), (1, 7, 20), (1, 8, 23), (1, 9, 12), (1, 10, 10), (1, 11, 7),
 (2, 1, 30), (2, 2, 10), (2, 6, 10), (2, 3, 15), (2, 4, 10), 
 (2, 5, 15), (2, 12, 12), (2, 13, 20), (2, 8, 20), (2, 7, 20);
 SELECT * FROM AREAXMODULE;
 SELECT SUM(tot_question) FROM AREAXMODULE
 INNER JOIN MODULE ON AREAXMODULE.module_id = MODULE.module_id
 WHERE area_id = 1 AND MODULE.component_amv_id = 1;
 
 #########################################################################
 
CREATE TABLE ROLE (
  role_id INT NOT NULL,
  name VARCHAR(30) NOT NULL
);
 
ALTER TABLE ROLE ADD CONSTRAINT module_pk PRIMARY KEY(role_id);
ALTER TABLE ROLE MODIFY role_id int NOT NULL AUTO_INCREMENT;
ALTER TABLE ROLE ADD CONSTRAINT role_chk CHECK (name = 'Administrador' OR name = 'Usuario');
INSERT INTO ROLE (name) VALUES ('Administrador'), ('Usuario');

SELECT * FROM ROLE;
#########################################################################

CREATE TABLE USER (
  user_id INT NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(15) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  second_name VARCHAR(25),
  first_lastname VARCHAR(30) NOT NULL,
  second_lastname VARCHAR(30),
  role_id INT NOT NULL
);
 
ALTER TABLE USER ADD CONSTRAINT user_pk PRIMARY KEY(user_id);
ALTER TABLE USER MODIFY user_id int NOT NULL AUTO_INCREMENT;
ALTER TABLE USER ADD CONSTRAINT user_role_fk FOREIGN KEY (role_id) REFERENCES ROLE(role_id) ON DELETE CASCADE ON UPDATE CASCADE;
SELECT * FROM user;
#########################################################################

CREATE TABLE EXAM (
  exam_id INT NOT NULL,
  date DATETIME NOT NULL
);

ALTER TABLE EXAM ADD CONSTRAINT exam_pk PRIMARY KEY(exam_id);
ALTER TABLE EXAM MODIFY exam_id int NOT NULL AUTO_INCREMENT;

#########################################################################

CREATE TABLE HISTORICAL (
  user_id INT NOT NULL,
  exam_id INT NOT NULL,
  area_id INT NOT NULL,
  score INT NOT NULL,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  total_score INT NOT NULL,
  status VARCHAR(20) NOT NULL,
  wrong_answers_id VARCHAR(500) NOT NULL,
  right_answers_id VARCHAR(500) NOT NULL
);
 
ALTER TABLE HISTORICAL ADD CONSTRAINT historical_pk PRIMARY KEY(user_id, exam_id, area_id);
ALTER TABLE HISTORICAL ADD CONSTRAINT historical_user_fk FOREIGN KEY (user_id) REFERENCES USER(user_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE HISTORICAL ADD CONSTRAINT historical_exam_fk FOREIGN KEY (exam_id) REFERENCES EXAM(exam_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE HISTORICAL ADD CONSTRAINT historical_area_fk FOREIGN KEY (area_id) REFERENCES AREA(area_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE HISTORICAL ADD CONSTRAINT historical_status_chk CHECK (status = 'COMPLETED' OR status = 'PENDING');
#########################################################################

CREATE TABLE CONTENT (
  content_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  file BLOB NOT NULL,
  module_id INT NOT NULL
);

ALTER TABLE CONTENT ADD CONSTRAINT content_pk PRIMARY KEY(content_id);
ALTER TABLE CONTENT MODIFY content_id int NOT NULL AUTO_INCREMENT;
ALTER TABLE CONTENT ADD CONSTRAINT content_module_fk FOREIGN KEY (module_id) REFERENCES MODULE(module_id) ON DELETE CASCADE ON UPDATE CASCADE;

#########################################################################

CREATE TABLE ITEM (
  item_id INT NOT NULL,
  question LONGTEXT,
  module_id INT NOT NULL
);
#ALTER TABLE ITEM MODIFY question LONGTEXT;

ALTER TABLE ITEM ADD CONSTRAINT item_pk PRIMARY KEY(item_id);
ALTER TABLE ITEM MODIFY item_id int NOT NULL AUTO_INCREMENT;
ALTER TABLE ITEM ADD CONSTRAINT item_module_fk FOREIGN KEY (module_id) REFERENCES MODULE(module_id) ON DELETE CASCADE ON UPDATE CASCADE;
SELECT * FROM ITEM;
#########################################################################

CREATE TABLE OPTIONS (
  option_id INT NOT NULL,
  text LONGTEXT NOT NULL,
  right_answer BOOLEAN NOT NULL,
  item_id INT NOT NULL
);
#ALTER TABLE OPTIONS MODIFY text LONGTEXT;
ALTER TABLE OPTIONS ADD CONSTRAINT option_pk PRIMARY KEY(option_id);
ALTER TABLE OPTIONS MODIFY option_id int NOT NULL AUTO_INCREMENT;
ALTER TABLE OPTIONS ADD CONSTRAINT options_item_fk FOREIGN KEY (item_id) REFERENCES ITEM(item_id) ON DELETE CASCADE ON UPDATE CASCADE;



SHOW FULL COLUMNS FROM position;
SHOW FULL COLUMNS FROM user;
SELECT * FROM MODULE;
select @@secure_file_priv;
##C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\
##########################################################################################
DELETE from content;
select * from content;
alter table content AUTO_INCREMENT = 1;
SELECT LOAD_FILE("C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\REMV-2024.pdf");

INSERT INTO CONTENT (name, file, module_id) VALUES ('REMV-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\REMV-2024.pdf'), 1);
INSERT INTO CONTENT (name, file, module_id) VALUES ('AAMV-Autorregulacion-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\AAMV-Autorregulacion-2024.pdf'), 2);
INSERT INTO CONTENT (name, file, module_id) VALUES ('ETIC-ETICA_INTEGRIDAD_2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\ETIC-ETICA_INTEGRIDAD_2024.pdf'), 3);
INSERT INTO CONTENT (name, file, module_id) VALUES ('AAEE-ANALSIS_ECONOMICO_FINANCIERO_2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\AAEE-ANALSIS_ECONOMICO_FINANCIERO_2024.pdf'), 4);
INSERT INTO CONTENT (name, file, module_id) VALUES ('MAFI-MATEMATICAS_FINANCIERAS_2019-1.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\MAFI-MATEMATICAS_FINANCIERAS_2019-1.pdf'), 6);
INSERT INTO CONTENT (name, file, module_id) VALUES ('Guia-de-ejercicios-Matematicas-financieras.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\Guia-de-ejercicios-Matematicas-financieras.pdf'), 6);
INSERT INTO CONTENT (name, file, module_id) VALUES ('Ejercicios-resueltos-en-hoja-de-calculo.xlsx', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\Ejercicios-resueltos-en-hoja-de-calculo.xlsx'), 6);
INSERT INTO CONTENT (name, file, module_id) VALUES ('ADDR_RIESGOS_2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\ADDR_RIESGOS_2024.pdf'), 5);
INSERT INTO CONTENT (name, file, module_id) VALUES ('PENS-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\PENS-2024.pdf'), 8);
INSERT INTO CONTENT (name, file, module_id) VALUES ('FICS-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\FICS-2024.pdf'), 7);
INSERT INTO CONTENT (name, file, module_id) VALUES ('ADDP-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\ADDP-2024.pdf'), 13);
INSERT INTO CONTENT (name, file, module_id) VALUES ('RECA-2024.pdf', LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\documentos_amv\\RECA-2024.pdf'), 12);

##########################################################################################

INSERT INTO ITEM(question, module_id) VALUES ("Un inversionista realiza una inversión de $10.000.000 que reconoce una tasa del 0,5% mes vencido
durante un año. ¿Cuál es el valor total al finalizar el año, incluyendo capital e intereses?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("¿Cuál es el interés anual recibido en la inversión del ejercicio anterior?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Un inversionista invierte $10.000.000 a una tasa del 0,5% mes vencido durante un año, reinvirtiendo los
intereses. ¿Cuál es el valor futuro total de la inversión?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("¿Cuál es el interés compuesto generado en la inversión del ejercicio anterior?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Una inversión ofrece un interés nominal anual del 6,0%, pagadero trimestre vencido. ¿Cuál es la tasa efectiva anual (E.A.) equivalente?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Una inversión ofrece un interés nominal anual del 5,0%, pagadero semestre vencido. ¿Cuál es la tasa E.A. equivalente?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Una inversión ofrece un interés nominal anual del 6,000%, pagadero mes vencido. ¿Cuál es la tasa efectiva anual equivalente?", 6);
INSERT INTO ITEM(question, module_id) VALUES (" Una inversión ofrece un interés nominal anual del 6,0%, pagadero trimestre anticipado. ¿Cuál es la tasa efectiva anual equivalente?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Si una inversión ofrece 5,062% E.A., ¿cuál es su tasa Nominal Anual Semestre Vencido (N.A.S.V.) equivalente?", 6);
INSERT INTO ITEM(question, module_id) VALUES ("Una inversión ofrece 6,0% E.A. ¿Cuál es su tasa Nominal Anual Trimestre Vencido (N.A.T.V.) equivalente?", 6);
#delete from item;
#alter table item AUTO_INCREMENT = 1;
SELECT * FROM ITEM;
##########################################################################################

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.000.000", false, 1);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.500.000", false, 1);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.600.000", true, 1);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.050.000", false, 1);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$500.000", false, 2);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$600.000", true, 2);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$650.000", false, 2);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$700.000", false, 2);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.600.000", false, 3);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.616.778", true, 3);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.650.000", false, 3);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$10.550.000", false, 3);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$600.000", false, 4);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$616.778", true, 4);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$650.000", false, 4);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("$500.000", false, 4);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,0%", false, 5);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,123%", false, 5);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,136%", true, 5);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,250%", false, 5);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,0%", false, 6);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,031%", false, 6);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,062%", true, 6);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,10%", false, 6);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,0%", false, 7);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,10%", false, 7);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,168%", true, 7);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,250%", false, 7);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,0%", false, 8);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,136%", false, 8);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,20%", false, 8);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("6,232%", true, 8);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,0%", true, 9);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,062%", false, 9);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,10%", false, 9);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("4,90%", false, 9);

INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,0%", true, 10);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,062%", false, 10);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("5,10%", false, 10);
INSERT INTO OPTIONS(text, right_answer, item_id) VALUES("4,90%", false, 10);

SELECT * FROM OPTIONS;