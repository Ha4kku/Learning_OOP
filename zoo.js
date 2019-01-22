var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();
    var animals = [tigger, pooh, rarity, gemma, stinger];
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals(animals, "leaves");
    console.log(Animal.getPopulation());

}
class Zookeeper{
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " animals.");
        for(var x = 0; x < animals.length; x ++){
            animals[x].eat(food);

        }
        return animalPopulation;

    }
}
class Animal{
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation ++;
    }
    static getPopulation(){
        return animalPopulation;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");

    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM ! ! " + this.name + " wants more " + food);
        }else {
            if(food != this.favoriteFood){
                this.sleep();
            }
        }


    }
}
class Tiger extends Animal{
    constructor(name, food){
        super (name, "meat") ;
    }
    /*sleep() {
        console.log(this.name + "sleeps for 8 hours.");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM!! " + this.name + " wants more " + food);
        }else {
            if (this.favoriteFood!= food){
                this.sleep();
            }
        }

    }*/




}


class Bear extends Animal {
    constructor(name, food) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months.");
    }
}

class Unicorn extends Animal {
    constructor(name, food){
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud.");
    }
}

class Giraffe extends Animal {
    constructor(name, food){
        super(name, "leaves");
    }
    eat(food){
        if(food == this.favoriteFood) {
            super.eat("leaves")
        } else {
            console.log("YUCK ! ! " + this.name + " will not eat " + food);
        }
    }

}

class Bee extends Animal {
    constructor(name, food){
        super(name, "pollen");
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat("pollen");
        }else {
            console.log("YUCK ! ! " + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " never sleeps.");
    }
}


// class Polygon extends Shape{
//
//     constructor(height, width) {
//         super('Polygon');
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
// }
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }



// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);
