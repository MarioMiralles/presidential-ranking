import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8800;
const dbUrl = process.env.CLEARDB_DATABASE_URL;
const dbConfig = new URL(dbUrl);
const db = mysql.createConnection({
    host: dbConfig.hostname,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.pathname.substring(1),
    port: dbConfig.port
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