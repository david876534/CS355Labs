var mysql   = require('mysql');
var db  = require('./db_connection.js');

/*Database config */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Users;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(user_id, callback) {
    console.log(user_id);
    var query = 'SELECT * FROM user_info_view WHERE user_id=' + user_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) { console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}
