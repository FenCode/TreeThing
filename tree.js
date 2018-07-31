function Tree()
{
	this.beginX = 360.0; // Initial x-coordinate
	this.beginY = 350.0; // Initial y-coordinate
	this.endX = 600.0; // Final x-coordinate
	this.endY = 100.0; // Final y-coordinate
	this.distX; // X-axis distance to move
	this.distY; // Y-axis distance to move
	this.exponent = 4; // Determines the curve
	this.x = 0.0; // Current x-coordinate
	this.y = 0.0; // Current y-coordinate
	this.step = 0.01; // Size of each step along the path
	this.pct = 0.5 // Percentage traveled (0.0 to 1.0)
	this.startPct = pct;
	this.posX = [];
	this.posY = [];
	this.sclX = [];
	this.sclY = [];
	this.minX = 1;
	this.minY = 1;
	//this.mulX = 1;
	//var mulY = 1;
	this.brushSize = 40;
	this.fillR = 0;
	this.fillG = 0;
	this.fillB = 0;

	this.setParameters = function(beginX, beginY, endX, endY, distX, distY, exponent, step, pct, minX, minY, brushSize, fillR, fillG, fillB)
	{
		this.beginX = beginX; // Initial x-coordinate
		this.beginY = beginY; // Initial y-coordinate
		this.endX = endX; // Final x-coordinate
		this.endY = endY; // Final y-coordinate
		this.distX = endX - beginX;
		this.distY = endY - beginY;
		this.exponent = exponent; // Determines the curve
		this.step = step; // Size of each step along the path
		this.pct = pct // Percentage traveled (0.0 to 1.0)
		this.minX = minX;
		this.minY = minY;
		//this.mulX = mulX;
		//this.mulY = mulY;
		this.brushSize = brushSize;
		this.fillR = fillR;
		this.fillG = fillG;
		this.fillB = fillB;
	}

	this.drawTree = function()
	{
		if (this.pct < 1.0) {
			this.x = this.beginX + pow(this.pct, this.exponent) * this.distX * this.minX;
			this.y = this.beginY + this.pct * this.distY * this.minY;
			//this.x *= this.mulX;
			//this.y *= this.mulY;
			this.pct += this.step;
			this.posX.push(this.x);
			this.posY.push(this.y);
			this.sclX.push(this.brushSize/(2*this.pct));
			this.sclY.push(this.brushSize/(2*this.pct));
		}
		if(this.pct >= 1.0){
			this.pct = this.startPct;
			this.minX *= -1;
			if(this.minX == 1)
			{
				this.beginY += 50;
				//beginY = posY[Math.floor(Math.rand())];
			}
		}

		fill(this.fillR, this.fillG, this.fillB);

		for(var i = 0; i < this.posX.length; i++)
		{
			ellipse(this.posX[i], this.posY[i], this.sclX[i], this.sclY[i]);
		}
	}
}