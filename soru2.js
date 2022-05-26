'use strict';

const fs = require('fs');

var data = fs.readFileSync('soru2.txt', 'utf-8');

fs.writeFile('soru3.txt', (Number(data[0])+Number(data[2]))+','+(Number(data[5])+Number(data[7]))+','
+ (Number(data[10])+Number(data[12]))+','+(Number(data[15])+Number(data[17])),function(err,data){

if (err) throw err;

});

