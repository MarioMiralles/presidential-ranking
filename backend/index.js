import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8800;
const db = mysql.createConnection({
    host: "alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gkyro5bc6p5i7os4",
    password: "e2uwmnm5c38ldtxp",
    database: "e9tj661pt0vuvjr0",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(cors());

app.get("/", (req, res) => {
    const q = "SELECT * FROM presidents ORDER BY ranking ASC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});