// Type Script
class Bike {
  price:number;
  maxSpeed:number;
  miles:number;
  constructor(priceI:number,maxSpeedI:number,milesI:number){
     this.price=priceI;
     this.maxSpeed=maxSpeedI;
     this.miles=milesI;
  }
  displayInfo = () => {
     console.log(`Price: ${this.price}, Max Speed: ${this.maxSpeed}, Miles: ${this.miles}.`);
  };
  ride = () => {
     console.log('riding'); 
     this.miles += 10;
     return this
  };
  reverse = () => {
     console.log('Reverse'); 
     if (this.miles - 5 > 0){
        this.miles -= 5;
     }
     return this
  };
}

const Bike1 = new Bike(100,20,55);
Bike1.ride().ride().reverse().displayInfo();
const Bike2 = new Bike(110,25,67);
Bike2.ride().ride().reverse().reverse().displayInfo();
const Bike3 = new Bike(130,15,50);
Bike3.ride().ride().reverse().displayInfo();

// JavaScript
// class Bike {
//   constructor(priceI, maxSpeedI, milesI) {
//       this.displayInfo = () => {
//           console.log(`Price: ${this.price}, Max Speed: ${this.maxSpeed}, Miles: ${this.miles}.`);
//       };
//       this.ride = () => {
//           console.log('riding');
//           this.miles += 10;
//           return this;
//       };
//       this.reverse = () => {
//           console.log('Reverse');
//           if (this.miles - 5 > 0) {
//               this.miles -= 5;
//           }
//           return this;
//       };
//       this.price = priceI;
//       this.maxSpeed = maxSpeedI;
//       this.miles = milesI;
//   }
// }
// const Bike1 = new Bike(100, 20, 55);
// Bike1.ride().ride().reverse().displayInfo();
// const Bike2 = new Bike(110, 25, 67);
// Bike2.ride().ride().reverse().reverse().displayInfo();
// const Bike3 = new Bike(130, 15, 50);
// Bike3.ride().ride().reverse().displayInfo();
