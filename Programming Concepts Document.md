Shapes
I used rect() to show some buttons.

Ex)  rect(340,50,140,50);    
	pop();    
	text("Play Now",340,60);
  
  Colors
  I used color function in shapes to show buttons clearly.


Ex) 	push();    
	fill('skyblue’);    
	rect(340,50,140,50);    
	pop();
  
  Variables
  I used variable function to designate screen page and each charactor’s name.
Ex)  const first_page = 1;
	const play = 2;
	const howtoplay = 3;
	const ending = 4;
	var screen = first_page;
	var player;
	var pps;
  
  Conditional Statements
  I used conditional statement to move the alien if I press left keyboard button, the alien go left and I press right keyboard button, the alien go right.

Ex) if(keyIsDown(LEFT_ARROW)){
	alien = left
	}
	if(keyIsDown(RIGHT_ARROW)){
	alien = right
	}
And I used conditional statement to change screen page.

Ex) if(screen == play){
	}
	 if(this.player.x-55<=this.pps.x+40 	&&this.player.x+55>=this.pps.x-40 &&	this.player.y>=this.pps.y){      
	screen = ending}

Loops
I used Loop to repeat falling poop until character is bumped against the poop.

Ex) for (var i = 0; i < mode; i++) {    
	poops[i].drop()    poops[i].draw()}

Functions
I used function to click the buttons(start game or play game again or how to play)

Ex) function mouseReleased() {  
	switch(screen){
		case first_page:
    
    Classes
    I used class function to draw character and load character easily.

Ex) character{
	 constructor(){
	
 	}
}

Arrays
I used array function to show popping poop when the poop arrive at the bottom of the screen.

Ex) var poops = [];
