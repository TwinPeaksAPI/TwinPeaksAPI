DROP TABLE IF EXISTS persons CASCADE;
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS quotes_persons_junction CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_quotes_junction CASCADE;
CREATE TABLE persons (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    occupation TEXT,
    age TEXT,
    hair_color TEXT,
    eye_color TEXT,
    actor TEXT,
    image TEXT
);
CREATE TABLE quotes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    quote_text TEXT NOT NULL,
    quote_text_only TEXT NOT NULL
);
CREATE TABLE quotes_persons_junction (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    persons_id SMALLINT NOT NULL,
    quotes_id SMALLINT NOT NULL
);
CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    discord_id BIGINT NOT NULL,
    password_hash TEXT NOT NULL
);
CREATE TABLE users_quotes_junction (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    quotes_id SMALLINT NOT NULL,
    users_id SMALLINT NOT NULL
);