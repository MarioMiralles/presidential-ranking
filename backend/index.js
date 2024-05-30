import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 8800;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "presidential_ranking"
})

app.listen(PORT, ()=>{
    console.log(`Backend server is running on port ${PORT}`)
})