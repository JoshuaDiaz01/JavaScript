class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card{
    constructor(name, cost, power, resiliance,){
        super(name,cost)
        this.resiliance = resiliance;
        this.power = power;
    }
    attack(target){
        target.resiliance -= this.power
        console.log(this.resiliance);
    }
}

class Effect extends Card{
    constructor(name, magnitude, stat, cost, text){
        super(name, cost)
        this.magnitude = magnitude;
        this.stat = stat;
        this.text = text;
    }
    play(target){
        if( target instanceof Unit ) {
            if (this.stat == "power"){
                target.power += this.magnitude;
            }
            else{
                target.resiliance += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    
}

const blackBelt = new Unit("blackBelt", 4, 5, 4);
const redBelt = new Unit("redBelt", 3, 3, 4);

const hardAlgo = new Effect("hardAlgo", 3, "resiliance", 2, "increase targets resiliance by 3")
const unhandled = new Effect("unhandled promise", -2, "resiliance", 1, "reduce targets resilience by 2")
const pairP = new Effect("pair programming", 2, "power", 3, "increase targets power by 2")

// hardAlgo.play(redBelt);
// console.log(redBelt);

// unhandled.play(redBelt);
// console.log(redBelt);

// pairP.play(redBelt);
// console.log(redBelt);

redBelt.attack(blackBelt);
console.log(blackBelt);


