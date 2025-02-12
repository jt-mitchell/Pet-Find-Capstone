CREATE DATABASE IF NOT EXISTS application_data_db;
USE application_data_db;

-- Create tables for application-specific data (if needed)
-- This might be for things like application settings, logs, etc.


-- Example:
CREATE TABLE IF NOT EXISTS AppConfig (
    config_key VARCHAR(255) PRIMARY KEY,
    config_value VARCHAR(255)
);
