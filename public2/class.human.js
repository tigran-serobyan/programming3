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
        var Human = random(this.yntrelVandak(4));
        if (this.kerats >= 100 && Human) {
            var norVandak = random(this.yntrelVandak(0));
            if (!norVandak) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr && norVandak) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        HumanArr.push(new Human(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 4;
                    }
                }
            }
            else if (norVandak) {
                HumanArr.push(new Human(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 4;
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
        var norVandak = random(this.yntrelKendani(7));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.kerats += 10;
        }
        else if (norVandak = random(this.yntrelKendani(8))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.kerats += 20;
        }
        else {
            if (SheepArr.length >= 50) {
                var norVandak = random(this.yntrelKendani(2));
                if (norVandak) {
                    matrix[this.y][this.x] = 0;
                    this.x = norVandak[0];
                    this.y = norVandak[1];
                    if (matrix[this.y][this.x] = 2) {
                        for (var i in SheepArr) {
                            if (SheepArr[i].x == this.x && SheepArr[i].y == this.y) {
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
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                        this.kerats += 5;
                    }
                    else {
                        this.sharjvel();
                    }
                }
            }
        }
    }
};