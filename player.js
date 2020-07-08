class P{
  constructor(){
    this.x = width/2;
    this.y = 9*height/10;
    this.speedx = 5
    this.Ps = new poop();
  }
  
  draw(){
    push()
    image(P1,this.x,this.y-50,80,80)
    pop()
  }
  
  update(){
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.speedx
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x += this.speedx 
    }
  }
}