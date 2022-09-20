const mysql = require('mysql2');
const express = require('express')

const app = express()

const db = mysql.createConnection({
    user: "root",
    password: "ultimax2",
    port: "3306",
    database: "movies_db",
    host: "localhost"
})

app.get('/',(req,res) => {
    const title = "Avatar"
    db.query(`SELECT * FROM actors WHERE rating > 9`, (err,result) => {
    if(result) {
        console.table(result);
        res.send(result);
    }
    else console.log(err)
    })

})

app.listen(3000,() => {
    db.connect(function(err) {  
        if (err) throw err;  
        console.log("Conectado a la db!");  
});  
    console.log("Servidor corriendo en puerto 3000")
})