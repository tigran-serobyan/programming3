class Wolf extends Animals {
    bazmanal() {
        var Wolf = this.yntrelVandak(3);
        for (var i in Wolf) {
            if (Wolf[i].gender != this.gender) {
                Wolf = Wolf[i];
            }
        }
        if (this.kerats == 10 && Wolf) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        WolfArr.push(new Wolf(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 3;
                    }
                }
            }
            else {
                WolfArr.push(new Wolf(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.kerats = 0;
                this.kerats = 0;
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in WolfArr) {
                if (WolfArr[i].x == this.x && WolfArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    WolfArr.splice(i, 1);
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
        this.energy -= 0.5;
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
            for (var i in SheepArr) {
                if (SheepArr[i].x == this.x && SheepArr[i].y == this.y) {
                    SheepArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 3;
            this.energy = 25;
            this.kerats++;
            this.grass = false;
        }
        else {
            this.sharjvel();
        }
    }
}