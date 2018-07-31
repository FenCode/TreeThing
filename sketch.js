var beginX = 360.0; // Initial x-coordinate
var beginY = 350.0; // Initial y-coordinate
var endX = 600.0; // Final x-coordinate
var endY = 100.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = 0.005; // Size of each step along the path
var pct = 0.5 // Percentage traveled (0.0 to 1.0)
var startPct = pct;
var posX = [];
var posY = [];
var sclX = [];
//var sclY = [];
var minX = 1;
var minY = 1;
var mulX = 1;
var mulY = 1;
var count = 0;
//var tree;
var branches = 1;
var totalBranches = 10;
var trunkHeight = 0;
var totalTrunkHeight = 240;
var trunkX = [];
var trunkY = [];
var offset = 15;
var cX = 200;
var cY = 200;
var cW = 25;
var cH = 25;
var moveSpeed = 2.5;

function setup() {
	createCanvas(720, 400);
	background(255);
	noStroke();
	distX = endX - beginX;
	distY = endY - beginY;
	totalBranches = random(3, 6);
	//tree = new Tree();
	minX = random([1, -1]);
}

function draw() {
 	//tree.drawTree();
 	clear();
 	rect(0, 375, 720, 50);
 	if (trunkHeight < totalTrunkHeight) {
			x = 360;
			y = 425 - (1 * trunkHeight);
			//x *= mulX;
			//y *= mulY;
			trunkX.push(x + 35 *(noise(trunkHeight*0.1) - 0.5));
			trunkY.push(y);
			trunkHeight +=0.5;
		}

 	if (pct < 1.0 && trunkHeight >= totalTrunkHeight) {
			x = beginX + pow(pct, exponent) * distX * minX - minX * offset;
			y = beginY + pct * distY * minY;
			//x *= mulX;
			//y *= mulY;
			pct += step;
			posX.push(x);
			posY.push(y + 50 *(noise(count*0.1) - 0.5));
			sclX.push(50*(1.2 - pct));
			//sclY.push(60/(5*pct));
			count ++;
	}
	if(pct >= 1.0 && branches < totalBranches){
		pct = startPct;
		minX *= -1;
		beginY += 40 + 50 * (noise(count*0.1) - 0.5);
		//beginY = posY[Math.floor(Math.rand())];
		branches++;
	}

	fill(0,0,0);

	for(var i = 0; i < posX.length; i++)
	{
		ellipse(posX[i], posY[i], sclX[i], 0.85*sclX[i]);
	}

	for(var i = 0; i < trunkX.length; i++)
	{
		var dim = 80 - 55*(i/trunkX.length);
		ellipse(trunkX[i], trunkY[i], dim, dim);
	}

	if (keyIsDown(UP_ARROW) && cY - cH/2 > 0) {
		cY -= moveSpeed;
	} else if (keyIsDown(DOWN_ARROW) && cY + cH/2 < height - 25 ) {
		cY += moveSpeed;
	}
	if (keyIsDown(LEFT_ARROW) && cX - cW/2 > 0) {
		cX -= moveSpeed;
	} else if (keyIsDown(RIGHT_ARROW) && cX + cW/2 < width) {
		cX += moveSpeed;
	}

	ellipse(cX,cY,cW,cH);

}


/*function mousePressed() {
  pct = 0.0;
  if (mouseIsPressed) {
  	background(255);
  	for (var i = 0; i < 200; i += 20) {
    	bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  	}
  	
    //var colorArray = [(255,0,0),(0,255,0),(0,0,255)];
    //fill(random(colorArray));
    //stroke();
    clear();
	stroke(0);
	fill(0);
   	bezier(12,21,12,21,12,21,12,21);
   	bezier(320 + 150, 175, 320 + 150, 175 + 400/2, 320 - 75, 175, 320, 175 + 400/2);
	//ellipse(320, 175, 300, 400);
	stroke(0);
	fill(0);
	var eyeX = random(35, 95);
	var eyeY = random(35, 95);
	ellipse(320 - 65, 175, eyeX, eyeY);
	ellipse(320 + 65, 175, eyeX, eyeY);
	stroke(0);
   	line(320 - 150, 175, 320 - 150, 175 + 150);
   	line(320, 175 + 150, 320 + 75, 175 + 300);
	stroke(222);
	fill(222);
   	bezier(320 - 150, 175, 320 - 150, 175 + 150, 320 + 75, 175 + 400, 320, 175 + 150);
   	bezier(320 + 150, 175, 320 + 150, 175 + 150, 320 - 75, 175 + 400, 320, 175 + 150);
	ellipse(320, 175, 300, 300);
	stroke(0);
	fill(0);
	ellipse(320 - 65, 175, 75, 75);
	ellipse(320 + 65, 175, 75, 75);
  } else {
  	//fill(0);
  }
  
}*/