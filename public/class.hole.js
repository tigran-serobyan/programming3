class Hole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 100;
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
        matrix[this.y][this.x] = 6;
        matrix[this.y][this.x + 1] = 6;
        matrix[this.y + 1][this.x] = 6;
        matrix[this.y + 1][this.x + 1] = 6;
    }
}