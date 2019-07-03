var  pooh = {character: 'Winnie the Pooh'};
var  tigger = {character: 'Tigger'}
var  piglet = {character: 'Piglet'}
var  bees = {character: 'Bees'}
var  owl = {character: 'Owl'}
var  christopher = {character: 'Christopher Robin'}
var  rabbit = {character: 'Rabbit'}
var  gopher = {character: 'Gopher'}
var  kanga = {character: 'Kanga'}
var  eeyore = {character: 'Eeyore'}
var  heffalumps = {character: 'Heffalumps'}

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
  if(player.location[dir] === undefined){
    console.log('You may not go that way')
  }else{
    player.location = player.location[dir]
    console.log('You are now at ' + player.location.character +'\'s house.')
  }
}

var dir = 'north'

move(dir)
move(dir)

dir = 'east'
move(dir)
move(dir)
move(dir)