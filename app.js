var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));
app.get('/', function (req, res) {
   res.redirect('public');
});
server.listen(3000);
io.on('connection', function (socket) {
  io.sockets.emit("send matrix", matrix);
  io.sockets.emit("send time", [time, time_h, time_m, weather]);
});

matrix = [];
n = 40;
m = 40;
var Grass_tokos = 75;
var Sheep_tokos = 20;
var Wolf_tokos = 2;
var Human_tokos = 1;
var Black_hole_tokos = 0.1;
var time = 0;
var time_h = 12;
var time_m = 0;
weather = 0;
grassArr = [];
SheepArr = [];
WolfArr = [];
HumanArr = [];
Black_holeArr = [];
White_holeArr = [];
var Grass = require('./class.grass.js');
var Sheep = require('./class.sheep.js');
var Wolf = require('./class.wolf.js');
var Human = require('./class.human.js');
var Black_hole = require('./class.black_hole.js');
var White_hole = require('./class.white_hole.js');
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
function main() {
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
    for (var i in SheepArr) {
      if (SheepArr[i].old_y > old_y) {
        old_y = SheepArr[i].old_y;
      }
    }
    for (var i in WolfArr) {
      if (WolfArr[i].old_y > old_y) {
        old_y = WolfArr[i].old_y;
      }
    }
    for (var i in HumanArr) {
      if (HumanArr[i].old_y > old_y) {
        old_y = HumanArr[i].old_y;
      }
    }
    var data = {
      Grass: grassArr.length,
      Sheep: SheepArr.length,
      Wolf: WolfArr.length,
      Human: HumanArr.length,
      old: old_y
    };
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
  io.sockets.emit("send matrix", matrix);
  io.sockets.emit("send time", [time, time_h, time_m, weather]);
}
setInterval(main, 100);