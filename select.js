

const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'school'
});

connection.connect(function(err){
if(err) throw err;
	console.log('MYSQL Bağlantısı Başarılı.');
	connection.query("SELECT * from Employee WHERE DepartmentName = 'Engineering'", function (err, result){
		if (err) throw err;
		console.log(result);
	});

});