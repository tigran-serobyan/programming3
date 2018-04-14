function random(v){return v[Math.floor(Math.random()*v.length)]};
var matrix = [];
var n = 20;
var m = 20;
var side = 12;
var Grass_tokos = 70;
var Sheep_tokos = 20;
var Wolf_tokos = 5;
var Human_tokos = 0.25;
var Black_hole_tokos = 1;
var Doctor_tokos = 0.25;
var Black_hole = require('./class.black_hole.js');
var Doctor = require('./class.doctor.js');
var Grass = require('./class.grass.js');
var Human = require('./class.human.js');
var Sheep = require('./class.sheep.js');
var Wolf = require('./class.wolf.js');
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = 0;
    }
}
for (var i = 0; i < n * m / 100 * Grass_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 1;
}
for (var i = 0; i < n * m / 100 * Sheep_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 2;
}
for (var i = 0; i < n * m / 100 * Wolf_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 3;
}
for (var i = 0; i < n * m / 100 * Human_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 4;
}
for (var i = 0; i < n * m / 100 * Black_hole_tokos / 4; i++) {
    var x = Math.floor(Math.random() * (m - 1));
    var y = Math.floor(Math.random() * (n - 1));
    while (x < 0 || y < 0 || x >= n || y >= m || (matrix[y][x] != 0 && matrix[y + 1][x] != 0 && matrix[y][x + 1] != 0 && matrix[y + 1][x + 1] != 0)) {
        x = Math.floor(Math.random() * (m - 1));
        y = Math.floor(Math.random() * (n - 1));
    }
    matrix[y][x] = 5;
    matrix[y + 1][x + 1] = 5;
}
for (var i = 0; i < n * m / 100 * Doctor_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 6;
}
var grassArr = [];
var SheepArr = [];
var WolfArr = [];
var HumanArr = [];
var Black_holeArr = [];
var DoctorArr = [];
function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                SheepArr.push(new Sheep(x, y));
            }
            else if (matrix[y][x] == 3) {
                WolfArr.push(new Wolf(x, y));
            }
            else if (matrix[y][x] == 4) {
                HumanArr.push(new Human(x, y));
            }
            else if (matrix[y][x] == 5 && matrix[y + 1][x + 1] == 5) {
                Black_holeArr.push(new Black_hole(x, y));
            }
            else if (matrix[y][x] == 6) {
                DoctorArr.push(new Doctor(x, y));
            }
        }
    }
}
setup();

function draw() {
    var k = ""; 
    for (var y = 0; y < matrix.length; y++) {
        var l = "";
        for (var x = 0; x < matrix[y].length; x++) {
            l += matrix[y][x] + " ";
        }
        k += l +"\n"
    }
    console.log(k);
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in SheepArr) {
        SheepArr[i].utel();
        SheepArr[i].bazmanal();
        SheepArr[i].satkel();
    }
    for (var i in WolfArr) {
        WolfArr[i].utel();
        WolfArr[i].bazmanal();
        WolfArr[i].satkel();
    }
    for (var i in HumanArr) {
        HumanArr[i].utel();
        HumanArr[i].bazmanal();
        HumanArr[i].mahanal();
    }
    for (var i in Black_holeArr) {
        Black_holeArr[i].utel();
        Black_holeArr[i].bazmanal();
        Black_holeArr[i].anhetanal();
    }
    for (var i in DoctorArr) {
        DoctorArr[i].bujel();
    }
    setInterval(draw, 500);
}
draw();