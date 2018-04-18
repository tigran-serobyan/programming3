class Sheep extends Animals{
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
                    matrix[this.y][this.x] = 0;
                    SheepArr.splice(i, 1);
                    break;
                }
            }
        }
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