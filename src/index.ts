import express from "express";
import {Pool} from 'pg';
import './pgSQL/db';
import './pgSQL/values';
import './conn';


const app = express();

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "drsnbuha@7",
    database: "school"
});

pool.connect();

app.get('/students', async (req, res) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM students');
      res.json({"message":"Students Table", data: [result.rows]});
    } finally {
      client.release();
    }
  });

  app.get('/result', async (req, res) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM result');
      res.json({"message":"Result Table", data: [result.rows]});
    } finally {
      client.release();
    }
  });


app.listen(8000, () => {
console.log("server run on 8000");
});
