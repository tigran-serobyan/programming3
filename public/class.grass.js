class Grass extends Animals{
    constructor(x, y) {
        super(x,y);
        this.multiply = Math.floor(Math.random() * 7) + 2;
        this.multiplyy = this.multiply;
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