CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    mobile TEXT UNIQUE,
    PRIMARY KEY(id)
);