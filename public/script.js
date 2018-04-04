var matrix = [];
var n = 70;
var m = 70;
var side = 12;
var xot_tokos = 70;
var xotaker_tokos = 20;
var gishatich_tokos = 5;
var mard_tokos = 0.1;
var sev_xoroch_tokos = 0.1;
var bjishk_tokos = 0.1;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = 0;
    }
}
for (var i = 0; i < n * m / 100 * xot_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 1;
}
for (var i = 0; i < n * m / 100 * xotaker_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 2;
}
for (var i = 0; i < n * m / 100 * gishatich_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 3;
}
for (var i = 0; i < n * m / 100 * mard_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 4;
}
for (var i = 0; i < n * m / 100 * sev_xoroch_tokos / 4; i++) {
    var x = Math.floor(Math.random() * (m - 1));
    var y = Math.floor(Math.random() * (n - 1));
    while (x < 0 || y < 0 || x >= n || y >= m || (matrix[y][x] != 0 && matrix[y + 1][x] != 0 && matrix[y][x + 1] != 0 && matrix[y + 1][x + 1] != 0)) {
        x = Math.floor(Math.random() * (m - 1));
        y = Math.floor(Math.random() * (n - 1));
    }
    matrix[y][x] = 5;
    matrix[y + 1][x + 1] = 5;
}
for (var i = 0; i < n * m / 100 * bjishk_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 6;
}
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var sev_xorochArr = [];
var bjishkArr = [];
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
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                mardArr.push(new Mard(x, y));
            }
            else if (matrix[y][x] == 5 && matrix[y + 1][x + 1] == 5) {
                sev_xorochArr.push(new Sev_xoroch(x, y));
            }
            else if (matrix[y][x] == 6) {
                bjishkArr.push(new Bjishk(x, y));
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
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].satkel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].satkel();
    }
    for (var i in mardArr) {
        mardArr[i].utel();
        mardArr[i].bazmanal();
        mardArr[i].mahanal();
    }
    for (var i in sev_xorochArr) {
        sev_xorochArr[i].utel();
        sev_xorochArr[i].bazmanal();
        sev_xorochArr[i].anhetanal();
    }
    for (var i in bjishkArr) {
        bjishkArr[i].bujel();
    }
}
