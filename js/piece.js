function Piece(tile,tipo) {
	this.tile = tile;
	this.tipo = tipo;
	this.w = 30;
	this.show = function(){
		let x = 52;
		let y = 52;
		if (this.tile[0] == 'B')
			x+=40;
		else if (this.tile[0] == 'C')
			x+=80;
		else if (this.tile[0] == 'D')
			x+=120;
		else if (this.tile[0] == 'E')
			x+=160;
		else if (this.tile[0] == 'F')
			x+=200;
		else if (this.tile[0] == 'G')
			x+=240;
		else if (this.tile[0] == 'H')
			x+=280;

		if (this.tile[1] == 7)
			y+=40;
		else if (this.tile[1] == 6)
			y+=80;
		else if (this.tile[1] == 5)
			y+=120;
		else if (this.tile[1] == 4)
			y+=160;
		else if (this.tile[1] == 3)
			y+=200;
		else if (this.tile[1] == 2)
			y+=240;
		else if (this.tile[1] == 1)
			y+=280;


		ellipse(x,y,this.w,this.w);
	}
}