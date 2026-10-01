-- HR System Schema

-- Companies
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    country VARCHAR(100),
    state VARCHAR(100),
    city VARCHAR(100),
    mobile VARCHAR(20),
    phone VARCHAR(20),
    hotline VARCHAR(20),
    fax VARCHAR(20),
    website VARCHAR(255),
    address TEXT,
    logo_path VARCHAR(255)
);

-- Financial Years
CREATE TABLE financial_years (
    id SERIAL PRIMARY KEY,
    year_name VARCHAR(20) NOT NULL,
    year_value INT NOT NULL
);

-- Employees (Masters)
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    emp_id VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    bank_name VARCHAR(255),
    branch_name VARCHAR(255),
    account_holder VARCHAR(255),
    account_number VARCHAR(50)
    -- Additional fields based on requirements...
);
