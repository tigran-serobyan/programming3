class Wolf extends Animals {
    bazmanal() {
        var Wolf2Arr = this.yntrelVandak(3);
        var Wolf2;
        var Wolf2Ill;
        for (var i in WolfArr) {
            if (Wolf2Arr[0] && Wolf2Arr[0][0]) {
                for (var k in Wolf2Arr) {
                    if (Wolf2Arr[k][0] == WolfArr[i].x & Wolf2Arr[k][1] == WolfArr[i].y & WolfArr[i].gender != this.gender & WolfArr[i].old_y>=3) {
                        Wolf2Ill = WolfArr[i].ill;
                        Wolf2 = Wolf2Arr[k];
                        break;
                    }
                }
            }
            else {
                if (Wolf2Arr[0] == WolfArr[i].x & Wolf2Arr[1] == WolfArr[i].y & WolfArr[i].gender != this.gender & WolfArr[i].old_y>=3) {
                    Wolf2 = Wolf2Arr;                    
                    Wolf2Ill = WolfArr[i].ill;
                    break;
                }
            }
        }

        if (this.kerats == 10 && Wolf2 && this.old_y>=3) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        WolfArr.push(new Wolf(norVandak[0], norVandak[1]));
                        if (this.ill || Wolf2Ill) {
                            WolfArr[WolfArr.length - 1].ill = true;
                        }
                        matrix[norVandak[1]][norVandak[0]] = 3;
                        this.kerats = 0;
                        for (var k in WolfArr) {
                            if (Wolf2[0] == WolfArr[k].x & Wolf2[1] == WolfArr[k].y) {
                                WolfArr[k].kerats = 0;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else {
                WolfArr.push(new Wolf(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 3;
                if (this.ill || Wolf2Ill) {
                    WolfArr[WolfArr.length - 1].ill = true;
                }
                this.kerats = 0;
                for (var k in WolfArr) {
                    if (Wolf2[0] == WolfArr[k].x & Wolf2[1] == WolfArr[k].y) {
                        WolfArr[k].kerats = 0;
                        break;
                    }
                }
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
        if (this.ill) {
            this.energy -= 0.3;
            this.kerats -= 0.3;
        }
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
                    if (SheepArr[i].ill) {
                        this.ill = true;
                    }
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