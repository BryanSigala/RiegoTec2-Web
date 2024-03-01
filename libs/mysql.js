const mysql = require('mysql2/promise')
 export const conn = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'riego'
 })