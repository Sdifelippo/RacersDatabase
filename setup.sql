DROP DATABASE IF EXISTS racedb;
CREATE DATABASE racedb;
--this is database specific (postgres) command to connect
\c racedb;

CREATE TABLE runner (
  bib_id  SERIAL PRIMARY KEY,
  division VARCHAR(100),
  sponser VARCHAR(100),
  name VARCHAR(100)
);

CREATE TABLE venue(
  venue_id  SERIAL PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(100)
);

CREATE TABLE race(
  race_id  SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  distance FLOAT NOT NULL,
  race_data TIMESTAMP NOT NULL,
  venue_id INTEGER,
  FOREIGN KEY (venue_id) REFERENCES venue(venue_id)
);

CREATE TABLE result(
  race_id INTEGER,
  FOREIGN KEY (race_id) REFERENCES race(race_id),
  FOREIGN KEY (bib_id) REFERENCES runner(bib_id) ,
  result_time FLOAT NOT NULL,
  bib_id INTEGER,
  PRIMARY KEY (race_id, bib_id)
);

INSERT INTO runner ( division, sponser, name)
VALUES ('m30', 'The Iron Yard', 'Steven Difelippo' ),
       ('f30', 'The Iron Yard', 'Angelica Rodriguez' ),
       ('m30', 'The Iron Yard', 'Rudy Gonzalez' );
