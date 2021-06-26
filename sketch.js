var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4;
var bike1Img, bike2Img, bike3Img, bike4Img,trackImg;

function preload(){
  bike1Img=loadImage("B1.png");
  bike2Img=loadImage("B2.png");
  bike3Img=loadImage("B3.png");
  bike4Img=loadImage("B4.png");
  trackImg=loadImage("track.jpg");

  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
