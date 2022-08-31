// class Ninja {
//     constructor(name){
//         this.name = name
//         this.health = 20
//         this.speed = 3
//         this.strength = 3
//     }
//     sayName(){
//         console.log(this.name)
//     }

//     sayStats(){
//         console.log("Health: " + this.health)
//         console.log("Speed: " + this.speed)
//         console.log("Strength: " + this.strength)
//     }

//     drinkSake(){
//         this.health += 10
//         console.log("SAKEE POWERUP")
//     }
    
// }
// const mayu = new Ninja("mayu")
// // mayu.drinkSake();
// // mayu.sayStats();

// class Sensei extends Ninja {
//     constructor(name){
//         super(name);
//         this.health = 200;
//         this.speed = 20;
//         this.strength = 20;
//         this.wisdom = 10;
//     }

//     speakWisdom(){
//         super.drinkSake();
//         console.log("A wise man once said, sake is the real blood of christ")
//         console.log("Health: " + this.health)
//         console.log("Speed: " + this.speed)
//         console.log("Strength: " + this.strength)
//         console.log("Wisdom: " + this.wisdom)
//     }


// }
// const SuperSensei = new Sensei("SuperSensei")
//     SuperSensei.speakWisdom();


    const groceryList = ([
        { "item": "carrots",           "haveIngredient": false },
        { "item": "onions",            "haveIngredient": true  },
        { "item": "celery",            "haveIngredient": false },
        { "item": "cremini mushrooms", "haveIngredient": false },
        { "item": "butter",            "haveIngredient": true  }
      ]);
    const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);

    console.log(sortedGroceries);