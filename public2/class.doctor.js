module.exports = class {
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
                SheepArr.push(new Sheep(this.x, this.y));
            }
            else if (matrix[this.y][this.x] == 8) {
                WolfArr.push(new Wolf(this.x, this.y));
            }
            matrix[this.y][this.x] = 6;
        }
    }
};