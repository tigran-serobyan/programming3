function main() {
    var socket = io.connect('http://localhost:3000');
}
window.onload = main;
var matrix = [];
var n = 40;
var m = 40;
var side = 12;
var Grass_tokos = 75;
var Sheep_tokos = 20;
var Wolf_tokos = 2;
var Human_tokos = 1;
var Black_hole_tokos = 0.1;
var time = 0;
var time_h = 12;
var time_m = 0;
var weather = 0;
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
    x = Math.floor(Math.random() * (m - 1));
    y = Math.floor(Math.random() * (n - 1));
    while (x < 0 || y < 0 || x >= n || y >= m || (matrix[y][x] != 0 && matrix[y + 1][x] != 0 && matrix[y][x + 1] != 0 && matrix[y + 1][x + 1] != 0)) {
        x = Math.floor(Math.random() * (m - 1));
        y = Math.floor(Math.random() * (n - 1));
    }
    matrix[y][x] = 6;
    matrix[y + 1][x + 1] = 6;
}
var grassArr = [];
var SheepArr = [];
var WolfArr = [];
var HumanArr = [];
var Black_holeArr = [];
var White_holeArr = [];
function setup() {
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side + 50);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                var new_sheep = new Sheep(x, y);
                SheepArr.push(new_sheep);
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
                if (matrix[y + 1][x + 1] == 6) {
                    White_holeArr.push(new White_hole(x, y));
                }
            }
        }
    }
    strokeWeight(0);
}
function draw() {
    background('#bcbcbc');
    time_m += 18;
    if (time_m >= 60) {
        time_h++;
        time_m -= 60;
    }
    if (time_h >= 24) {
        time_h = 0;
    }
    time += 3;
    if (time >= 240) {
        time = 0;
        var old_y = 0;
        for(var i in SheepArr){
            if(SheepArr[i].old_y > old_y){
                old_y = SheepArr[i].old_y;
            }
        }
        for(var i in WolfArr){
            if(WolfArr[i].old_y > old_y){
                old_y = WolfArr[i].old_y;
            }
        }
        for(var i in HumanArr){
            if(HumanArr[i].old_y > old_y){
                old_y = HumanArr[i].old_y;
            }
        }
        var data = {
            Grass:grassArr.length,
            Sheep:SheepArr.length,
            Wolf:WolfArr.length,
            Human:HumanArr.length,
            old: old_y
        };
        socket.emit("send data", data);
    }
    weather += 0.0025;
    if (weather >= 4) {
        weather = 0;
    }
    if (weather == 1 || weather == 3) {
        random(grassArr).ill = true;
        random(grassArr).ill = true;
        random(grassArr).ill = true;
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (weather >= 3 && weather < 4) {
                    if (time < 120) {
                        var c = 220 - time;
                    }
                    else {
                        var c = (-20) + time;
                    }
                    var c2 = Math.floor(c / 1.5) + 20;
                    fill("rgb(" + c + "," + c + "," + c + ")");
                    rect(x * side, y * side, side, side);
                }
                else if (weather >= 1 && weather < 2) {
                    if (time < 120) {
                        var c = 150 - time;
                    }
                    else {
                        var c = (-90) + time;
                    }
                    var c2 = Math.floor(c / 2.5);
                    fill("rgb(" + c + "," + c + "," + c2 + ")");
                    rect(x * side, y * side, side, side);
                }
                else {
                    if (time < 120) {
                        var c = 150 - time;
                    }
                    else {
                        var c = (-90) + time;
                    }
                    fill("rgb(0," + c + ",0)");
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 2) {
                if (time < 120) {
                    var c = 250 - time;
                }
                else {
                    var c = 10 + time;
                }
                fill("rgb(" + c + "," + c + ",0)");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                if (time < 120) {
                    var c = 250 - time;
                }
                else {
                    var c = 10 + time;
                }
                fill("rgb(" + c + ",0,0)");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                if (time < 120) {
                    var c = 250 - time;
                }
                else {
                    var c = 10 + time;
                }
                var c2 = Math.round(c / 2);
                fill("rgb(" + c + "," + c2 + ",0)");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#bcbcbc");
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
        if (SheepArr[i] && time_h == 0) {
            SheepArr[i].old();
        }
    }
    for (var i in WolfArr) {
        WolfArr[i].utel();
        WolfArr[i].bazmanal();
        WolfArr[i].satkel();
        if (WolfArr[i] && time_h == 0) {
            WolfArr[i].old();
        }
    }
    for (var i in HumanArr) {
        HumanArr[i].utel();
        HumanArr[i].bazmanal();
        HumanArr[i].mahanal();
        if (HumanArr[i] && time_h == 0) {
            HumanArr[i].old();
        }
    }
    for (var i in Black_holeArr) {
        Black_holeArr[i].utel();
        Black_holeArr[i].bazmanal();
        Black_holeArr[i].anhetanal();
    }
    textSize(15);
    fill("black");
    text('The time is ' + time_h + ":" + time_m, 0, matrix[0].length * side + 30);
    if (weather > 0 && weather < 1) {
        text('Now is ' + "Spring", matrix.length * side - 120, matrix[0].length * side + 30);
    }
    else if (weather > 1 && weather < 2) {
        text('Now is ' + "Summer", matrix.length * side - 120, matrix[0].length * side + 30);
    }
    else if (weather > 2 && weather < 3) {
        text('Now is ' + "Autumn", matrix.length * side - 120, matrix[0].length * side + 30);
    }
    else if (weather > 3 && weather < 4) {
        text('Now is ' + "Winter", matrix.length * side - 120, matrix[0].length * side + 30);
    }

}