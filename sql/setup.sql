-- DROP TABLE IF EXISTS lclquotes;
-- CREATE TABLE lclquotes (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   quote_text TEXT NOT NULL,
--   quote_text_only TEXT NOT NULL,
--   persons TEXT [] NOT NULL
-- )
CREATE TABLE persons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  id_lclquotes BIGINT REFERENCES lclquotes(persons),
  names TEXT NOT NULL,
  character_id INTEGER NOT NULL,
)