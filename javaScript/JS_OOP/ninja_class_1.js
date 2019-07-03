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
}

var ninja1 = new Ninja('Peter')
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()