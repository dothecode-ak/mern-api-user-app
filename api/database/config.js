const mysql = require('mysql');
// create here mysql connection
const dbConn = mysql.createConnection({
    host: process.env.host_url,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
});
dbConn.connect(function(error){
    if(error) throw error;
    console.log('Mysql DB Connected Successfully.');
})
module.exports = dbConn;