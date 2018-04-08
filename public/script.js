var matrix = [];
var n = 30;
var m = 30;
var side = 30;
var Grass_tokos = 70;
var Sheep_tokos = 20;
var Wolf_tokos = 5;
var Human_tokos =0.1;
var Black_hole_tokos = 0.1;
var Doctor_tokos = 0.1;
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
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#ececec');
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
    strokeWeight(0);
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#1ab2ff");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("#664d00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill("#660000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#ececec");
                rect(x * side, y * side, side, side);
            }
        }
    }
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
}
