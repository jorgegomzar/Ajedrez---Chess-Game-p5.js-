function Tile(color, letter, number){
	this.w = 40;
	this.c = color;
	this.letter = letter;
	this.number = number;
	this.show = function(){
		let letterOffset = 0;
		if (letter == 'B')
			letterOffset+=40;
		else if (letter == 'C')
			letterOffset+=80;
		else if (letter == 'D')
			letterOffset+=120;
		else if (letter == 'E')
			letterOffset+=160;
		else if (letter == 'F')
			letterOffset+=200;
		else if (letter == 'G')
			letterOffset+=240;
		else if (letter == 'H')
			letterOffset+=280;
		let numberOffset = (8 - number) * 40;
		stroke(0);
		fill(this.c);
		square(letterOffset+32,numberOffset+32,this.w,this.w);
	}
}

