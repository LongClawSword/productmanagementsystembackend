// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: 'postgresql://productdb_cz0v_user:519SD38kaSCYsmVWBEKgiojtQIXuPTpu@dpg-csd8ttu8ii6s73fc9g5g-a.oregon-postgres.render.com/productdb_cz0v',
  ssl: {
    rejectUnauthorized: false // Required if the cloud-hosted PostgreSQL instance enforces SSL
  }
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    await pool.query('INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4)', [name, description, price, quantity]);
    res.status(201).send('Product added');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a product
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    await pool.query('UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5', [name, description, price, quantity, id]);
    res.send('Product updated');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.send('Product deleted');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
