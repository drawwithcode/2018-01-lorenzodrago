function setup() {

	var cnv = createCanvas(500, 500);
 var x = (windowWidth - width) / 2;
 var y = (windowHeight - height) / 2;
 cnv.position(x, y);
	strokeWeight(6);
	stroke(0);
	fill(204);
	noCursor();
}
var position;
var maxH = 360;
var minH = 230;
var horPos = mouseX;

function draw() {
	translate(0, -50);
	background(120, 220, 200);
	if(mouseY<maxH&&mouseY>minH){
		position = mouseY;
	} else if (mouseY>maxH){
		position = maxH;
	} else if (mouseY<minH){
		position = minH;
	}

	rectMode(CENTER);
	//wheel
	noStroke()
	fill(0, 70);
	ellipse((mouseX-250)*0.7+250,500, 150, 20);
	stroke(100,10,10);
	fill(255);
	ellipse((mouseX-250)*0.7+250,470, 50);
	fill(20,120,100);
	stroke(20, 120, 100);
	ellipse((mouseX-250)*0.7+250,470, 20);
	stroke(100,10,10);
	fill(255);
	//spring
	line((mouseX-250)*1+250-40, position*0.75+130.75, (mouseX-250)*1+250+40, position*0.75+130.75) ;
	line((mouseX-250)*0.9+250-40, position*0.5+232.2, (mouseX-250)*0.9+250+40, position*0.5+232.2);
	line((mouseX-250)*0.8+250-40, position*0.25+334, (mouseX-250)*0.8+250+40, position*0.25+334);
	//head
	rect((mouseX-250)*1.1+250, position, 80, 60, 40, 40, 0, 0);
	line((mouseX-250)*1.1+250, position-30, (mouseX-250)*1.1+250, position-40);
	line((mouseX-250)*1.1+250+15, position-45, (mouseX-250)*1.1+250-15, position-45);
	//eyes
	stroke(20, 120, 100);
	line((mouseX-250)*1.15+250-20, position+15, (mouseX-250)*1.15+250-20, position);
	line((mouseX-250)*1.15+250+20, position+15, (mouseX-250)*1.15+250+20, position);
	//shoulders
	stroke(100,10,10);
	noFill()
	bezier((mouseX-250)*1+250-65, position*0.75+130.75, (mouseX-250)*1+250-65, position*0.75+130.75,
	(mouseX-250)*1+250-65-50, position*0.9+130.75-60, (mouseX-250)*1+250-65-50, position*2-150-150);
	bezier((mouseX-250)*1+250+65, position*0.75+130.75, (mouseX-250)*1+250+65, position*0.75+130.75,
	(mouseX-250)*1+250+65+50, position*0.9+130.75-60, (mouseX-250)*1+250+65+50, position*2-150-150);
	fill(255);
	ellipse((mouseX-250)*1+250-65-50, position*2-150-150, 20, 20);
	ellipse((mouseX-250)*1+250+65+50, position*2-150-150, 20, 20);
	rect((mouseX-250)*1+250-65, position*0.75+130.75, 20, 20, 10, 0, 0, 10);
	rect((mouseX-250)*1+250+65, position*0.75+130.75, 20, 20, 0, 10, 10, 0);
	//bottom
	rect((mouseX-250)*0.7+250, 452.5, 80, 35, 0, 0, 10, 10);
}
