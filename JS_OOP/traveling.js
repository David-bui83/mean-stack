var  pooh = {charater: 'Winnie the Pooh'};
var  tigger = {charater: 'Tigger'}
var  piglet = {charater: 'Piglet'}
var  bees = {charater: 'Bees'}
var  owl = {charater: 'Owl'}
var  christopher = {charater: 'Christopher Robin'}
var  rabbit = {charater: 'Rabbit'}
var  gopher = {charater: 'Gopher'}
var  kanga = {charater: 'Kanga'}
var  eeyore = {charater: 'Eeyore'}
var  heffalumps = {charater: 'Heffalumps'}

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
    }
    else{
      player.location = player.location['north']
      console.log('You are now at '+ player.location.charater +'\'s house')
    }
  }

  if(dir === 'south'){
    if(player.location['south'] === undefined){
      console.log('You may not go that way')
    }
    else{
      player.location = player.location['south']
      console.log('You are now at '+ player.location.charater +'\'s house')
    }
  }

  if(dir === 'east'){
    if(player.location['east'] === undefined){
      console.log('You may not go that way')
    }
    else{
      player.location = player.location['east']
      console.log('You are now at '+ player.location.charater +'\'s house')
    }
  }

  if(dir === 'west'){
    if(player.location['west'] === undefined){
      console.log('You may not go that way')
    }
    else{
      player.location = player.location['west']
      console.log('You are now at '+ player.location.charater +'\'s house')
    }
  }

}

var dir = 'north'

move(dir)
move(dir)

dir = 'east'
move(dir)
move(dir)
move(dir)