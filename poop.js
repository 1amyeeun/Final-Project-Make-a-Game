
class poop{
  constructor(){
  this.x = random(400);
  this.y = random(-400, 400);
  this.a = random(0, 20);
  this.s = map(this.a, 0, 20, 2, 20);
  }

  drop(){
    this.y = this.y + this.s;
    this.s = this.s + 0.1;

    if (this.y > 400) {
      this.y = random(-100, -100);
      this.s = map(this.a, 0, 10, 5, 10);
    }
  }

  draw() {
    image(pp,this.x,this.y,50,50)
  }
}