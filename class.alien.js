var random = require('./random.js');
module.exports = class Alien {
    constructor() {
        // this.multiply = Math.floor(Math.random() * 50) + 50;
        this.multiply = 2;
        this.i = 0;
        this.alien_human = 0;
    }
    bazmanal() {
        if (this.alien_human >= 10) {
            this.alien_human = 0;
            AlienArr.push(new Alien);
        }
    }
    utel() {
        this.i++;
        if (this.i == this.multiply) {
            this.i = 0;
            if (HumanArr.length < 30 && HumanArr.length != 0) {
                var k = 0;
                while (k < 5) {
                    var h = random(HumanArr);
                    for (var j in HumanArr) {
                        if (HumanArr[j].x == h.x && HumanArr[j].j == h.y) {
                            HumanArr.splice(j, 1);
                            alien_human++;
                            this.alien_human++;
                            break;
                        }
                        matrix[h.y][h.x] = 0;
                    }

                    k++;
                }
            }
            else {
                var k = HumanArr.length / 5;
                while (k > 0) {
                    var h = random(HumanArr);
                    for (var j in HumanArr) {
                        if (HumanArr[j].x == h.x && HumanArr[j].j == h.y) {
                            HumanArr.splice(j, 1);
                            alien_human++;
                            this.alien_human++;
                            break;
                        }
                        matrix[h.y][h.x] = 0;
                    }
                    k--;
                }
            }
        }
    }
}