CREATE DATABASE IF NOT EXISTS user_db;
USE user_db;

-- Create tables related to users (e.g., Users, Roles)
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    --... other columns
);

--... other table creation statements
