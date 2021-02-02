var database;
var game;
var obsc1;
var points;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance = 0;
var car1, car2;
var highlight;
var cars;
var playPoint1, playPoint2;
var car1_load, car2_load;
var back_load;
function preload() {
    car1_load = loadImage("Untitled.png");
    car2_load = loadImage("Untitledj.png");
    back_load = loadImage("back.jpg");
}


function setup(){

    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
  if(playerCount===2){
      game.update(1);
  }
  if(gameState === 1){
      clear();
      game.play();
  }
  if(gameState == 2) {
      game.end();
  }
}
