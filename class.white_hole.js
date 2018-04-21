var Hole = require('./class.hole.js');
var Sheep = require('./class.sheep.js');
var Wolf = require('./class.wolf.js');
var Human = require('./class.human.js');
var random = require('./random.js');
module.exports = class White_hole extends Hole{
    stexcel(ch){
        var norVandak = random(this.directions);
        if(ch == 2){
            SheepArr.push(new Sheep(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
        else if(ch == 3){
            WolfArr.push(new Wolf(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
        else if(ch == 4){
            HumanArr.push(new Human(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 4;
        }
    }
}