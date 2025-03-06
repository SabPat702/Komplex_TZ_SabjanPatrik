const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    password: "",
    user: "root",
    host: "localhost",
    database: "felveteli"
});

app.get("/regi", (req, res) => {
    const query = "Select diakok.nev, tagozatok.agazat, diakok.hozott+diakok.kpmagy+diakok.kpmat as 'osszpontszam' from diakok inner join jelentkezesek on jelentkezesek.diak = diakok.oktazon inner join tagozatok on tagozatok.akod=jelentkezesek.tag Order by diakok.nev Asc";
    db.query(query, (err, result) => {
        if(err) return(res.json(err))
        return(res.json(result))
    })
})

app.get("/atment/:agazat", (req, res) => {
    const query = "Select diakok.nev, tagozatok.agazat, diakok.hozott+diakok.kpmagy+diakok.kpmat as 'osszpontszam' from diakok inner join jelentkezesek on jelentkezesek.diak = diakok.oktazon inner join tagozatok on tagozatok.akod=jelentkezesek.tag Where tagozatok.agazat = ? Order by 'osszpontszam' Desc Limit 32";
    db.query(query, [req.params.agazat], (err, result) => {
        if(err) return(res.json(err))
        return(res.json(result))
    })
})

app.get("/agazat", (req, res) => {
    const query = "Select tagozatok.agazat from tagozatok";
    db.query(query, (err, result) => {
        if(err) return(res.json(err))
        return(res.json(result))
    })
})

app.listen(3001, () => {
    console.log("A szerver fut a 3001-es porton.")
})