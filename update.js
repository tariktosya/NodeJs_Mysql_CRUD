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
	var sql = "UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'";
	connection.query(sql, function(err,result){
		if (err) throw err;
		console.log(result.affectedRows +" Güncelleme Başarılı");
	});

});