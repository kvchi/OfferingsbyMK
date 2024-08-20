import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const db = mysql.createConnection({
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    charset: "UTF8",
    host: "localhost",
    port: 3306
})

console.log({
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
})

db.connect(err => {
    if(err) console.log(`Unable to connect to the database. ${err}`)
        else console.log('connection successful')
})

export default db;
