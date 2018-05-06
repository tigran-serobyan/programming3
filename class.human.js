var Animals = require('./class.parent.js');
var random = require('./random.js');
module.exports = class Human extends Animals {
    animal_direction() {
        this.anilam_direction = [];
        for (var i = 0; i < n; i++) {
            this.animal_direction[i] = [];
            this.animal_direction[i][0] = this.x;
            this.animal_direction[i][1] = i;
        }
        for (var i = n; i < m + n; i++) {
            this.animal_direction[i] = [];
            this.animal_direction[i][0] = i - n;
            this.animal_direction[i][1] = this.y;
        }
    }
    yntrelKendani(ch) {
        this.animal_direction();
        var found = [];
        for (var i in this.animal_direction) {
            var x = this.animal_direction[i][0];
            var y = this.animal_direction[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.animal_direction[i]);
                }
            }

        }
        return found;
    }
    bazmanal() {
        var Human2Arr = this.yntrelVandak(4);
        var Human2;
        var Human2Ill;
        for (var i in HumanArr) {
            if (Human2Arr[0] && Human2Arr[0][0]) {
                for (var k in Human2Arr) {
                    if (Human2Arr[k][0] == HumanArr[i].x & Human2Arr[k][1] == HumanArr[i].y & HumanArr[i].gender != this.gender & HumanArr[i].old_y >= 1.2) {
                        Human2Ill = HumanArr[i].ill;
                        Human2 = Human2Arr[k];
                        break;
                    }
                }
            }
            else {
                if (Human2Arr[0] == HumanArr[i].x & Human2Arr[1] == HumanArr[i].y & HumanArr[i].gender != this.gender & HumanArr[i].old_y >= 1.2) {
                    Human2Ill = HumanArr[i].ill;
                    Human2 = Human2Arr;
                    break;
                }
            }
        }
        if (this.kerats >= 100 && Human2 & this.old_y>=1.2) {
            var norVandak = random(this.yntrelVandak(0));
            if (!norVandak) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr && norVandak) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        HumanArr.push(new Human(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 4;
                        if (this.ill || Human2Ill) {
                            HumanArr[HumanArr.length - 1].ill = true;
                        }
                        this.kerats = 0;
                        for (var k in HumanArr) {
                            if (Human2[0] == HumanArr[k].x & Human2[1] == HumanArr[k].y) {
                                HumanArr[k].kerats = 0;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else if (norVandak) {
                HumanArr.push(new Human(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 4;
                if (this.ill || Human2Ill) {
                    HumanArr[HumanArr.length - 1].ill = true;
                }
                this.kerats = 0;
                for (var k in HumanArr) {
                    if (Human2[0] == HumanArr[k].x & Human2[1] == HumanArr[k].y) {
                        HumanArr[k].kerats = 0;
                        break;
                    }
                }
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in HumanArr) {
                if (HumanArr[i].x == this.x && HumanArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    HumanArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.grass = false;
        }
        this.energy--;
        this.kerats = 0;
    }
    utel() {
        if (this.ill) {
            this.energy -= 0.8;
            this.kerats -= 0.8;
        }
        if (SheepArr.length >= 50) {
            var norVandak = random(this.yntrelKendani(2));
            if (norVandak) {
                matrix[this.y][this.x] = 0;
                this.x = norVandak[0];
                this.y = norVandak[1];
                if (matrix[this.y][this.x] = 2) {
                    for (var i in SheepArr) {
                        if (SheepArr[i].x == this.x && SheepArr[i].y == this.y) {
                            if (SheepArr[i].ill) {
                                this.ill = true;
                            }
                            SheepArr.splice(i, 1);
                            this.kerats += 10;
                            break;
                        }
                    }
                }
            }
            matrix[this.y][this.x] = 4;
            this.energy = 25;

        }
        else {
            if (WolfArr.length >= 50) {
                norVandak = random(this.yntrelKendani(3));
                for (var i in WolfArr) {
                    if (WolfArr[i].x == this.x && WolfArr[i].y == this.y) {
                        if (WolfArr[i].ill) {
                            this.ill = true;
                        }
                        WolfArr.splice(i, 1);
                        this.kerats += 20;
                        break;
                    }
                }
                matrix[this.y][this.x] = 4;
                this.energy = 25;
            }
            else {
                norVandak = random(this.yntrelVandak(1));
                if (norVandak) {
                    matrix[norVandak[1]][norVandak[0]] = 4;
                    matrix[this.y][this.x] = 0;
                    this.x = norVandak[0];
                    this.y = norVandak[1];
                    for (var i in grassArr) {
                        if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                            if (grassArr[i].ill) {
                                this.ill = true;
                            }
                            grassArr.splice(i, 1);
                            grass_old ++;
                            break;
                        }
                    }
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
    }
}