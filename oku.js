'use strict';

const fs = require('fs');

var data = fs.readFileSync('katsayi.txt', 'utf-8');

var x = Number(data[0]);
var a = Number(data[2]);
var b = Number(data[4]);
var c = Number(data[6]);
var sonuc = (a*(x*x))+(b*x)+(c);
console.log(sonuc);

var x = Number(data[9]);
var a = Number(data[11]);
var b = Number(data[13]);
var c = Number(data[15]);

var sonuc = (a*(x*x))+(b*x)+(c);
console.log(sonuc);

var x = Number(data[18]);
var a = Number(data[20]);
var b = Number(data[22]);
var c = Number(data[24]);

var sonuc = (a*(x*x))+(b*x)+(c);
console.log(sonuc);
