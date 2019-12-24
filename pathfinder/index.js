const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'planview.c8b6vzxzne44.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'S$an03032006',
  database : 'survey'
});

exports.report = (callback) => {
  console.log(123)
  connection.connect();

  // let timestamp = new Date().getTime();
  // let query = 'INSERT INTO pathfinder (user, session, name, role, score) VALUES ("user1", "'+timestamp+'", "pathfinder", "manager", 16)';
  let query = 'SELECT * from pathfinder WHERE id = 7';
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    // console.log(results[0].session)
    // console.log('The solution is: ', new Date(parseInt(results[0].session)).toDateString());
    callback(results);
  });
  connection.end();
}
