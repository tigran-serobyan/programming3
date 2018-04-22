var Animals = require('./class.parent.js');
var random = require('./random.js');
module.exports = class Sheep extends Animals {
    bazmanal() {
        var Sheep2Arr = this.yntrelVandak(2);
        var Sheep2;
        var Sheep2Ill;
        for (var i in SheepArr) {
            if (Sheep2Arr[0] && Sheep2Arr[0][0]) {
                for (var k in Sheep2Arr) {
                    if (Sheep2Arr[k][0] == SheepArr[i].x & Sheep2Arr[k][1] == SheepArr[i].y & SheepArr[i].gender != this.gender & SheepArr[i].old_y >= 0.2) {
                        Sheep2Ill = SheepArr[i].ill;
                        Sheep2 = Sheep2Arr[k];
                        break;
                    }
                }
            }
            else {
                if (Sheep2Arr[0] == SheepArr[i].x & Sheep2Arr[1] == SheepArr[i].y & SheepArr[i].gender != this.gender & SheepArr[i].old_y >= 0.2) {
                    Sheep2Ill = SheepArr[i].ill;                    
                    Sheep2 = Sheep2Arr;
                    break;
                }
            }
        }
        if (this.kerats >= 10 && this.old_y >= 0.2 && Sheep2) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        SheepArr.push(new Sheep(norVandak[0], norVandak[1]));
                        if (this.ill || Sheep2Ill) {
                            SheepArr[SheepArr.length - 1].ill = true;
                        }
                        matrix[norVandak[1]][norVandak[0]] = 2;
                        this.kerats = 0;
                        for (var k in SheepArr) {
                            if (Sheep2[0] == SheepArr[k].x & Sheep2[1] == SheepArr[k].y) {
                                SheepArr[k].kerats = 0;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else {
                SheepArr.push(new Sheep(norVandak[0], norVandak[1]));
                if (this.ill || Sheep2Ill) {
                    SheepArr[SheepArr.length - 1].ill = true;
                }
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.kerats = 0;
                for (var k in SheepArr) {
                    if (Sheep2[0] == SheepArr[k].x & Sheep2[1] == SheepArr[k].y) {
                        SheepArr[k].kerats = 0;
                        break;
                    }
                }
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in SheepArr) {
                if (SheepArr[i].x == this.x && SheepArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    SheepArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    utel() {
        if (this.ill) {
            this.energy -= 0.1;
            this.kerats -= 0.1;
        }
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    if (grassArr[i].ill) {
                        this.ill = true;
                    }
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 2;
            this.energy = 5;
            if ((weather >= 1 && weather < 2) || (weather >= 3 && weather < 4)) {
                this.kerats += 0.5;
            }
            else {
                this.kerats++;
            }

        }
        else {
            this.sharjvel();
        }
    }
}