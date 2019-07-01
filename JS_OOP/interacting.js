var  pooh = {charater: 'Winnie the Pooh', greet: function(){console.log("Oh bother")}};
var  tigger = {charater: 'Tigger', greet: function(){console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")}}
var  piglet = {charater: 'Piglet', greet: function(){console.log("Oh d-d-d-d-dear! I wasn't expecting company!")}}
var  bees = {charater: 'Bees', greet: function(){console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")}}
var  owl = {charater: 'Owl'}
var  christopher = {charater: 'Christopher Robin', greet: function(){console.log("Silly old bear, I won't ever forget about you")}}
var  rabbit = {charater: 'Rabbit', greet: function(){console.log("You stay away from my hunny pooh!")}}
var  gopher = {charater: 'Gopher', greet: function(){console.log("I like to dig holes and tunnels")}}
var  kanga = {charater: 'Kanga', greet: function(){console.log("Bouncing around all day.")}}
var  eeyore = {charater: 'Eeyore', greet: function(){console.log("A little consideration, a little thought for others, makes all the difference.")}}
var  heffalumps = {charater: 'Heffalumps', greet: function(){console.log("Hello, there friend!")}}

tigger.north = pooh
tigger.north.west = piglet
tigger.north.east = bees 

pooh.south = tigger
pooh.north = christopher 
pooh.west = piglet 
pooh.east = bees 
pooh.north.west = owl
pooh.north.east = rabbit

piglet.east = pooh
piglet.east.south = tigger
piglet.north = owl 
piglet.north.east = christopher

bees.west = pooh 
bees.west.south = tigger 
bees.north = rabbit 
bees.north.west = christopher 
bees.north.east = gopher

owl.south = piglet 
owl.south.east = pooh
owl.east = christopher
owl.east.north = kanga

christopher.west = owl 
christopher.west.south = piglet
christopher.south = pooh 
christopher.south.east = bees
christopher.east = rabbit
christopher.north = kanga

rabbit.west = christopher
rabbit.south = bees
rabbit.south.west = pooh 
rabbit.east = gopher
rabbit.west.north = kanga 

gopher.west = rabbit 
gopher.west.south = bees

kanga.south = christopher
kanga.south.west = owl
kanga.south.east = rabbit
kanga.north = eeyore
kanga.north.east = heffalumps

eeyore.south = kanga
eeyore.east = heffalumps

heffalumps.west = eeyore
heffalumps.west.south = kanga

var player = {location: tigger};
function move(dir){

  console.log('direction: ' + dir)
  if(dir === 'north'){
    if(player.location['north'] === undefined){
      console.log('You may not go that way')
    }else{
      player.location = player.location['north']
      console.log('You are now at '+ player.location.charater +'\'s house')
      player.location.greet()
    }
  }

  if(dir === 'south'){
    if(player.location['south'] === undefined){
      console.log('You may not go that way')
    }else{
      player.location = player.location['south']
      console.log('You are now at '+ player.location.charater +'\'s house')
      player.location.greet()
    }
  }

  if(dir === 'east'){
    if(player.location['east'] === undefined){
      console.log('You may not go that way')
    }else{
      player.location = player.location['east']
      console.log('You are now at '+ player.location.charater +'\'s house')
      player.location.greet()
    }
  }

  if(dir === 'west'){
    if(player.location['west'] === undefined){
      console.log('You may not go that way')
    }else{
      player.location = player.location['west']
      console.log('You are now at '+ player.location.charater +'\'s house')
      player.location.greet()
    }
  }

}

var dir = 'north'
move(dir)
move(dir)
move(dir)
dir = 'south'
move(dir)

// dir = 'east'
// move(dir)
// move(dir)
// move(dir)