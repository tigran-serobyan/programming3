module.exports = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.kerats = 0;
    }
    direction() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.direction();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    bazmanal() {
        if (this.kerats == 10) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        SheepArr.push(new Sheep(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 2;
                    }
                }
            }
            else {
                SheepArr.push(new Sheep(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 2;
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in SheepArr) {
                if (SheepArr[i].x == this.x && SheepArr[i].y == this.y) {
                    var life = Math.floor(Math.random() * 5);
                    if (life == 4) {
                        matrix[this.y][this.x] = 7;
                    }
                    else {
                        matrix[this.y][this.x] = 0;
                    }
                    SheepArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        this.energy--;
        this.kerats = 0;
    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 2;
            this.energy = 5;
            this.kerats++;

        }
        else {
            this.sharjvel();
        }
    }
};