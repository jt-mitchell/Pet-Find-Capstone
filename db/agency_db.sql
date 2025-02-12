CREATE DATABASE IF NOT EXISTS agency_db;
USE agency_db;

-- Create your tables for adoption agency information (e.g., AdoptionAgency)
CREATE TABLE IF NOT EXISTS AdoptionAgency (
    agency_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    --... other columns
);
