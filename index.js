

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
	var sql = "CREATE TABLE Employee (EmployeeId INT, FirstName VARCHAR(255), LastName VARCHAR(255), DepartmentName VARCHAR(255))";
		connection.query(sql, function (err, result){
			if (err) throw err;
			console.log("Tablo Oluşturuldu");
		});

});