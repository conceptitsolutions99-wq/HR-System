const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database/hr_system.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err.message);
  } else {
    console.log('Connected to SQLite database at', dbPath);
  }
});

// Helper to make it match the previous .query() signature slightly better
const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    // Determine if it's a 'get all' (SELECT) or 'execute' (INSERT/UPDATE)
    if (sql.trim().toUpperCase().startsWith('SELECT')) {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve({ rows });
      });
    } else {
      db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      });
    }
  });
};

module.exports = { query };
