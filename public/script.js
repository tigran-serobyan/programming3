var matrix = [[]];
var side = 12;
var time = 210;
var time_h = 12;
var time_m = 0;
var weather = 0;
var j = 0;
var game_over = false;
function main() {
    var socket = io.connect('http://localhost:3000');
    function set_matrix(new_matrix) {
        matrix = new_matrix;
        j++;
        if (j == 1) {
            function setup() {
                frameRate(5);
                createCanvas(matrix[0].length * side, matrix.length * side + 50);
                strokeWeight(0);
            }
            setup();
        }
    }
    function set_time(new_time) {
        time = new_time[0];
        time_h = new_time[1];
        time_m = new_time[2];
        weather = new_time[3];
    }
    function game_over() {
        game_over = true;
        frameRate(0);
        background('#bcbcbc');
        textSize(35);
        fill("black");
        text('Game Over', matrix.length * side / 2 - 100, matrix[0].length * side / 2 - 35);

    }
    socket.on("send matrix", set_matrix);
    socket.on("game over", game_over);
    socket.on("send time", set_time);
}
function draw() {
    background('#bcbcbc');
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
window.onload = main;