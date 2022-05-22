const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'umc-db-study.c6wyvoplxl0u.ap-northeast-2.rds.amazonaws.com',
    user: 'ethan',
    port: '3306',
    password: 'rlaehddnr20',
    database: 'UMC_DB'
}); 

module.exports = {
    pool: pool
};