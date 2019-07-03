function Ninja(name, health=100){
  this.name = name;
  this.health = health;
  this.speed = 3;
  this.strength = 3;
  this.sayName = function(){
    console.log(name)
  };
  this.showStats = function(){
    console.log(`Name: ${name}, Health: ${health}, Speed: ${this.speed}, Strength: ${this.strength}`)
  }
  this.drinkSake = function(){
    health += 10;
  }
  this.punch = function(ninja){
    this.health -= 5;
    console.log(`${this.name} was punched by ${ninja.name} and lost 5 health!`)
  }
  this.kick = function(ninja){
    this.health -= (15 *ninja.strength);
    console.log(`${this.name} was kicked by ${ninja.name} and lost ${this.health} health!`)
  }
}

var ninja1 = new Ninja('Peter')
var ninja2 = new Ninja('Mike')
ninja1.punch(ninja2)
ninja2.kick(ninja1)
