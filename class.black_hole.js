var Hole = require('./class.hole.js');
var random = require('./random.js');
module.exports = class Black_hole extends Hole{
    yntrelVandak() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    bazmanal() {
        if (this.kerats >= 500) {
            var x = Math.floor(Math.random() * (m - 1));
            var y = Math.floor(Math.random() * (n - 1));
            Black_holeArr.push(new Black_hole(x, y));
            x = Math.floor(Math.random() * (m - 1));
            y = Math.floor(Math.random() * (n - 1));
            White_holeArr.push(new White_hole(x, y));
            this.kerats = 0;
        }
    }
    anhetanal() {
        if (this.multiply <= 0) {
            matrix[this.y][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y + 1][this.x + 1] = 0;
            for (var i in Black_holeArr) {
                if (Black_holeArr[i].x == this.x && Black_holeArr[i].y == this.y) {
                    Black_holeArr.splice(i, 1);
                    matrix[White_holeArr[0].y][White_holeArr[0].x] = 0;
                    matrix[White_holeArr[0].y+1][White_holeArr[0].x] = 0;
                    matrix[White_holeArr[0].y][White_holeArr[0].x+1] = 0;
                    matrix[White_holeArr[0].y+1][White_holeArr[0].x+1] = 0;
                    White_holeArr.splice(0,1);
                    break;
                }
            }
        }
    }
    utel() {
        matrix[this.y][this.x] = 5;
        matrix[this.y][this.x + 1] = 5;
        matrix[this.y + 1][this.x] = 5;
        matrix[this.y + 1][this.x + 1] = 5;
        this.multiply--;
        var harevanner = this.yntrelVandak();
        if (harevanner) {
            for (var i in harevanner) {
                if (matrix[harevanner[i][1]][harevanner[i][0]] == 2) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 10;
                    for (var j in SheepArr) {
                        if (SheepArr[j].x == [harevanner[i][0]] && SheepArr[j].y == [harevanner[i][1]]) {
                            SheepArr.splice(j, 1);
                            if(Math.floor(Math.random()*6) == 5){
                                White_holeArr[Math.floor(Math.random()*White_holeArr.length)].stexcel(2);
                            }
                            break;
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 3) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 20;
                    for (var j in WolfArr) {
                        if (WolfArr[j].x == [harevanner[i][0]] && WolfArr[j].y == [harevanner[i][1]]) {
                            WolfArr.splice(j, 1);
                            if(Math.floor(Math.random()*6) == 5){
                                White_holeArr[Math.floor(Math.random()*White_holeArr.length)].stexcel(3);
                            }
                            break;
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 4) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 30;
                    for (var j in HumanArr) {
                        if (HumanArr[j].x == [harevanner[i][0]] && HumanArr[j].y == [harevanner[i][1]]) {
                            HumanArr.splice(j, 1);
                            if(Math.floor(Math.random()*11) == 10){
                                White_holeArr[Math.floor(Math.random()*White_holeArr.length)].stexcel(4);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}