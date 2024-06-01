import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8800;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "presidential_ranking"
})

app.use(cors());

app.get("/", (req, res)=>{
    const q = "SELECT * FROM presidents ORDER BY ranking ASC";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});