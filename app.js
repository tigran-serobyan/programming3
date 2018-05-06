var fs = require('fs');
var random = require('./random');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));
app.get('/', function (req, res) {
  res.redirect('public');
  fs.readFile(file, 'utf8', function (err, data) {
    if (!err) {
      io.sockets.emit("statistics", JSON.parse(data));
    }
    else {
    }
  });
});
server.listen(3000);
io.on('connection', function (socket) {
  io.sockets.emit("send matrix", matrix);
  io.sockets.emit("send time", [time, time_h, time_m, weather]);
});

matrix = [];
n = 40;
m = 40;
grass_new = 0;
grass_old = 0;
var Grass_tokos = 65;
var Sheep_tokos = 15;
var Wolf_tokos = 0.5;
var Human_tokos = 0.5;
var Black_hole_tokos = 0.2;
var Alien_tokos = 0.2;
var time = 210;
var time_h = 12;
var time_m = 0;
weather = 0;
alien_human = 0;
grassArr = [];
SheepArr = [];
WolfArr = [];
HumanArr = [];
Black_holeArr = [];
White_holeArr = [];
AlienArr = [];
var Grass = require('./class.grass.js');
var Sheep = require('./class.sheep.js');
var Wolf = require('./class.wolf.js');
var Human = require('./class.human.js');
var Black_hole = require('./class.black_hole.js');
var White_hole = require('./class.white_hole.js');
var Alien = require('./class.alien.js');

function setup() {
  for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
      matrix[y][x] = 0;
    }
  }
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
  AlienArr = [];
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
  for (var i = 0; i < n * m / 100 * Alien_tokos; i++) {
    AlienArr.push(new Alien());
  }
}
setup();
var k = 0;
function main() {
  k++
  if (k % 5 == 0) {
    var old_y = -1;
    var old_ch;
    var ill_c = 0;
    var ill_g = 0;
    for (var i in grassArr) {
      if (grassArr[i].ill) {
        ill_g++;
      }
    }
    for (var i in SheepArr) {
      if (SheepArr[i].ill) {
        ill_c++;
      }
      if (SheepArr[i].old_y > old_y) {
        old_y = SheepArr[i].old_y;
        old_ch = 'Sheep';

      }
    }
    for (var i in WolfArr) {
      if (WolfArr[i].ill) {
        ill_c++;
      }
      if (WolfArr[i].old_y > old_y) {
        old_y = WolfArr[i].old_y;
        old_ch = 'Wolf';
      }
    }
    for (var i in HumanArr) {
      if (HumanArr[i].ill) {
        ill_c++;
      }
      if (HumanArr[i].old_y > old_y) {
        old_y = HumanArr[i].old_y;
        old_ch = 'Human';

      }
    }
    var file = "data.json";
    var tokos = n*m;
    var data = {
      'Grass': grassArr.length / tokos * 99,
      'Sheep': SheepArr.length / tokos * 99,
      'Wolf': WolfArr.length / tokos * 99,
      'Human': HumanArr.length / tokos * 99,
      'Grass_t': grassArr.length,
      'Sheep_t': SheepArr.length,
      'Wolf_t': WolfArr.length,
      'Human_t': HumanArr.length,
      'old': [old_y, old_ch],
      'ill_c': ill_c,
      'ill_g': ill_g,
      'grass_new':grass_new,
      'grass_old':grass_old
    };
    var json = JSON.stringify(data);
    fs.writeFile(file, json);
        io.sockets.emit("statistics", data);
  }
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
  }
  weather += 0.0025;
  if (weather >= 4) {
    weather = 0;
  }
  if (weather == 1 || weather == 3) {
    var ill = grassArr.length;
    while(ill > 0){
      random(grassArr).ill = true;
      ill--;
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
  for (var i in AlienArr) {
    AlienArr[i].utel();
    AlienArr[i].bazmanal();
  }
  io.sockets.emit("send matrix", matrix);
  io.sockets.emit("send time", [time, time_h, time_m, weather]);
  if (grassArr.length == 0 & SheepArr.length == 0 & WolfArr.length == 0 & HumanArr.length == 0) {
    io.sockets.emit("game over");
  }
  else if (SheepArr.length == 0 & WolfArr.length == 0 & HumanArr.length == 0) {
    io.sockets.emit("game over");
  }
  else if (grassArr.length == 0 & WolfArr.length == 0 & HumanArr.length == 0) {
    io.sockets.emit("game over");
  }
  else if (grassArr.length == 0 & SheepArr.length == 0 & HumanArr.length == 0) {
    io.sockets.emit("game over");
  }
  else if (grassArr.length == 0 & SheepArr.length == 0 & WolfArr.length == 0) {
    io.sockets.emit("game over");
  }
  if (SheepArr.length == 0 & WolfArr.length == 0) {
    for (var i in HumanArr) {
      if (i == 0) {
        var gender = HumanArr[i].gender;
      }
      else {
        if (HumanArr[i].gender != gender) {
          break;
        }
        else {
          io.sockets.emit("game over");
        }
      }
    }
  }
  if (HumanArr.length == 0 & WolfArr.length == 0) {
    for (var i in SheepArr) {
      if (i == 0) {
        var gender = SheepArr[i].gender;
      }
      else {
        if (SheepArr[i].gender != gender) {
          break;
        }
        else {
          io.sockets.emit("game over");
        }
      }
    }
  }
  if (HumanArr.length == 0 & SheepArr.length == 0) {
    for (var i in WolfArr) {
      if (i == 0) {
        var gender = WolfArr[i].gender;
      }
      else {
        if (WolfArr[i].gender != gender) {
          break;
        }
        else {
          io.sockets.emit("game over");
        }
      }
    }
  }
}
setInterval(main, 500);