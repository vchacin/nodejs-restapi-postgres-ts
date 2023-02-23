CREATE DATABASE firstapi;

CREATE TABLE user_info (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email TEXT
);

INSERT INTO user_info (name, email) 
    VALUES ('joe', 'joe@example.com'),
            ('ryan', 'ryan@example.com');
