const mysql = require('mysql2/promise');

// create connection pool to MySQL database
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'Lowes_CapStone',
});

async function createUser(name, email, password) {
  const INSERT_USER_QUERY = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const connection = await pool.getConnection();
  await connection.query(INSERT_USER_QUERY, [name, email, password]);
  connection.release();
}

async function validateUser(email, password) {
  const SELECT_USER_QUERY = `SELECT * FROM users WHERE email = ? AND password = ?`;
  const connection = await pool.getConnection();
  const [results] = await connection.query(SELECT_USER_QUERY, [email, password]);
  connection.release();
  return results.length > 0 ? results[0] : null;
}

module.exports = { createUser, validateUser };
