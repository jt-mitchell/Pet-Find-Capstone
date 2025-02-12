CREATE DATABASE IF NOT EXISTS pet_info_db;
USE pet_info_db;

-- Create your tables for pet information here (e.g., Pet, Breed, etc.)
CREATE TABLE IF NOT EXISTS Pet (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    species VARCHAR(255),
    --... other columns
);
