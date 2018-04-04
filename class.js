class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.floor(Math.random() * 7) + 2;
        this.multiplyy = this.multiply;
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
        this.multiply--;
        if (this.multiply <= 0) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                grassArr.push(new Grass(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = this.multiplyy;
            }
        }
    }
}

class Xotaker {
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
                        xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 2;
                    }
                }
            }
            else {
                xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 2;
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    var life = Math.floor(Math.random() * 5);
                    if (life == 4) {
                        matrix[this.y][this.x] = 7;
                    }
                    else {
                        matrix[this.y][this.x] = 0;
                    }
                    xotakerArr.splice(i, 1);
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
}

class Gishatich {
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
        var gishatich = random(this.yntrelVandak(3));
        if (this.kerats == 10 && gishatich) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        gishatichArr.push(new Gishatich(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 3;
                    }
                }
            }
            else {
                gishatichArr.push(new Gishatich(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 3;
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    var life = Math.floor(Math.random() * 5);
                    if (life == 4) {
                        matrix[this.y][this.x] = 8;
                    }
                    else {
                        matrix[this.y][this.x] = 0;
                    }
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.grass = false;
        }
        else {
            norVandak = random(this.yntrelVandak(1));
            if (norVandak) {
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.x = norVandak[0];
                this.y = norVandak[1];
                this.grass = true;
            }
        }
        this.energy--;
        this.kerats = 0;
    }
    utel() {
        if (this.grass) {
            matrix[this.y][this.x] = 1;
        }
        else {
            matrix[this.y][this.x] = 0;
        }
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 3;
            this.energy = 15;
            this.kerats++;
            this.grass = false;
        }
        else {
            this.sharjvel();
        }
    }
}

class Mard {
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
        var mard = random(this.yntrelVandak(4));
        if (this.kerats >= 100 && mard) {
            var norVandak = random(this.yntrelVandak(0));
            if (!norVandak) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr && norVandak) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        mardArr.push(new Mard(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 4;
                    }
                }
            }
            else if (norVandak) {
                mardArr.push(new Mard(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    mardArr.splice(i, 1);
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
            if (xotakerArr.length >= 50) {
                var norVandak = random(this.yntrelKendani(2));
                if (norVandak) {
                    matrix[this.y][this.x] = 0;
                    this.x = norVandak[0];
                    this.y = norVandak[1];
                    if (matrix[this.y][this.x] = 2) {
                        for (var i in xotakerArr) {
                            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                                xotakerArr.splice(i, 1);
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
                if (gishatichArr.length >= 50) {
                    norVandak = random(this.yntrelKendani(3));
                    for (var i in gishatichArr) {
                        if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                            gishatichArr.splice(i, 1);
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
}

class Sev_xoroch {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 150;
        this.kerats = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y],
            [this.x + 2, this.y],
            [this.x - 1, this.y + 1],
            [this.x + 2, this.y + 1],
        ];
    }
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
        if (this.kerats >= 200) {
            var x = Math.floor(Math.random() * (m - 1));
            var y = Math.floor(Math.random() * (n - 1));
            sev_xorochArr.push(new Sev_xoroch(x, y));
            this.kerats = 0;
        }
    }
    anhetanal() {
        if (this.multiply <= 0) {
            matrix[this.y][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y + 1][this.x + 1] = 0;
            for (var i in sev_xorochArr) {
                if (sev_xorochArr[i].x == this.x && sev_xorochArr[i].y == this.y) {
                    sev_xorochArr.splice(i, 1);
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
                    for (var j in xotakerArr) {
                        if (xotakerArr[j].x == [harevanner[i][0]] && xotakerArr[j].y == [harevanner[i][1]]) {
                            xotakerArr.splice(j, 1);
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 3) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 20;
                    for (var j in gishatichArr) {
                        if (gishatichArr[j].x == [harevanner[i][0]] && gishatichArr[j].y == [harevanner[i][1]]) {
                            gishatichArr.splice(j, 1);
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 4) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 30;
                    for (var j in mardArr) {
                        if (mardArr[j].x == [harevanner[i][0]] && mardArr[j].y == [harevanner[i][1]]) {
                            mardArr.splice(j, 1);
                        }
                    }
                }
            }
        }
    }
}

class Bjishk {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    yntrelVandak() {
        var found = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 7 || matrix[y][x] == 8) {
                    var diak = [x, y];
                    found.push(diak);
                }

            }
        }
        return found;
    }
    bujel() {
        var diak = random(this.yntrelVandak());
        if (diak) {
            matrix[this.y][this.x] = 0;
            this.x = diak[0];
            this.y = diak[1];
            if (matrix[this.y][this.x] == 7) {
                xotakerArr.push(new Xotaker(this.x, this.y));
            }
            else if (matrix[this.y][this.x] == 8) {
                gishatichArr.push(new Gishatich(this.x, this.y));
            }
            matrix[this.y][this.x] = 6;
        }
    }
}