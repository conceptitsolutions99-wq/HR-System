-- HR System Schema (SQLite)

-- Companies
CREATE TABLE IF NOT EXISTS companies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    country TEXT,
    state TEXT,
    city TEXT,
    mobile TEXT,
    phone TEXT,
    hotline TEXT,
    fax TEXT,
    website TEXT,
    address TEXT,
    logo_path TEXT
);

-- Financial Years
CREATE TABLE IF NOT EXISTS financial_years (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    year_name TEXT NOT NULL,
    year_value INTEGER NOT NULL
);

-- Employees (Masters)
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    emp_id TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE,
    bank_name TEXT,
    branch_name TEXT,
    account_holder TEXT,
    account_number TEXT
);

-- Attendance
CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    status TEXT,
    date TEXT
);

-- Leave Applications
CREATE TABLE IF NOT EXISTS leave_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    leave_type TEXT,
    start_date TEXT,
    end_date TEXT,
    reason TEXT,
    status TEXT
);
