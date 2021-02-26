const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;

var engine,world,database;
var playerCount,allplayers,gameState=0;
var name,score
var x=0
var y=0
var player,game,form;
var ground


function setup() {
  createCanvas(1200,400);
  database = firebase.database();
 
  
  engine=Engine.create();
  world=engine.world;

  
  game=new Game()
  game.getState()
  game.start()

  
}

function draw() {
 
  Engine.update(engine) 
  if(playerCount===2){
    gameState=1
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  
  //form.display()
}