var mysql = require('mysql');
var pool  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Smile2014@',
    database: 'geolcation'
});
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
});
module.exports = pool;