// Yeeun.kim
// Final Project - Make a Game
// CS099
// Spring 2020

const first_page = 1;
const play = 2;
const howtoplay = 3;
const ending = 4;

var screen = first_page;

var player;
var pps;
var poops = [];
var mode = 10;

function setup() {
  createCanvas(400, 400);
  player = new P();
  pps = new poop();
  for (var i = 0; i < mode; i++) {
    poops[i] = new poop();
  }
}

function draw() {
  background(220);
  image(back,0,0,400,400)
  
  if(screen == play){
  player.draw()
  player.update()
  for (var i = 0; i < mode; i++) {
    poops[i].drop()
    poops[i].draw()
    
    if(this.player.x-55<=this.pps.x+40 && this.player.x+55>=this.pps.x-40 && this.player.y>=this.pps.y){
      screen = ending
    }
  }
  }
    
  if(screen == first_page){
    image(Title,0,10,400,150)
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20)
    noStroke();
    rect(width/2,height/2,140,60)
    text("Play",width/2,height/2+5)
    rect(width/2,height/2+70,140,60)
    text("How to Play",width/2,height/2+75)
  }
  
  if(screen == howtoplay){
    image(how,0,0,400,400)
    push();
    fill('skyblue')
    rect(340,50,140,50)
    pop();
    text("Play Now",340,60)
  }
  
  if(screen == ending){
    image(gameover,0,0,400,400)
    push();
    fill('skyblue')
    rect(340,50,140,50)
    pop();
    text("Play Again",340,60)
  }
}

function preload(){
  back = loadImage('back.gif')
  P1 = loadImage('c.gif')
  pp = loadImage('P.gif')
  Title = loadImage('title.png')
  how = loadImage('how to play.png')
  gameover = loadImage('gameover.png')
}

function mouseReleased() {
  switch(screen){
    case first_page:
     if(mouseX <= width/2+70 && mouseX >= width/2-70 && mouseY <= height/2+30 && mouseY >= height/2-30){
       screen = play;
        }else if(mouseX <= width/2+70 && mouseX >= width/2-70 && mouseY <= height/2+100 && mouseY >= height/2+40){
          screen = howtoplay
        }
        break;
     case howtoplay:
      if(mouseX >= 300 && mouseY<=100&&mouseY>=25){
        screen = play;
      }
  }
}