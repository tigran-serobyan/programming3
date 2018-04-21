class Animals {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ill = false;
        this.old_y = 0;
        this.energy = 5;
        this.directions = [];
        this.kerats = 0;
        this.gender = Math.floor(Math.random() * 2);
    }
    old(){
        this.old_y += 0.05;
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
    sharjvel(a) {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = a;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.grass = false;
        }
        this.energy--;
        this.kerats = 0;
    }
}