class Ninja {
  constructor(name, health=100){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(this.name);
  }
  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
  }
  drinkSake(){
    this.health += 10
  }
}

class Sensei extends Ninja {
  constructor(name, health=200, speed=10, strength=10){
    super(name, health);
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.wisdom = 10;
  }
  speakWisdom(){
    this.drinkSake()
  }
}

 const superSensei = new Sensei('Master Splinter')
 
 superSensei.speakWisdom()
 superSensei.showStats()
