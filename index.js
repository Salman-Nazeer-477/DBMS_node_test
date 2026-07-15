// server.js
const mysql = require('mysql2');
const express = require('express');
const app = express();

// 1. Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',      // Server hosting the database (e.g., localhost or an IP address)
  user: 'salmannazeer477',           // Your MySQL username
  password: '123456789', // Your MySQL password
  database: 'salman_test', // The name of your database
  waitForConnections: true,
  connectionLimit: 10,    // Maximum concurrent connections allowed
  queueLimit: 0
});

// 2. Convert the pool to use Promises (allows clean async/await syntax)
const promisePool = pool.promise();

// 3. Test connection and query data
async function fetchUsers() {
  try {
    // Run a standard SQL query
    const [rows, fields] = await promisePool.query("SELECT * FROM employee");
    
    console.log("Data retrieved successfully:");
    console.log(rows);
    console.log(fields); 
    // Serve static assets from the "public" folder
  app.use(express.static('public'));
  app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error("Error connecting or querying the database:", error.message);
  } finally {
    // Close the pool when the application shuts down
    pool.end();
  }
}

fetchUsers();




