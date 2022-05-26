

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
	var sql = "INSERT INTO Employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES ?";
	var values =[
	[1,'Ken','Sanchez','Executive'],
	[2,'Terri','Duffy','Engineering'],
	[3,'Roberto','Tamburello','Engineering'],
	[4,'Rob','Walters','Engineering'],
	[5,'Gail','Erickson','Engineering'],
	[6,'Jossef','Goldberg','Engineering'],
	[7,'Dylan','Miler','Support'],
	[8,'Diane','Margheim','Support'],
	[9,'Gigi','Matthew','Support'],
	[10,'Michael','Raheem','Support']
	];
		connection.query(sql,[values], function (err, result){
			if (err) throw err;
			console.log("Veriler Tabloya Eklendi");
		});

});