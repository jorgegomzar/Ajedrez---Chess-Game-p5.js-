new p5();
var tablero = new Array();
var equipoNegro = new Array();
var equipoBlanco = new Array();
var letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var colorTile = true;
let font, fontsize = 25;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
	createCanvas(384,384);
	background(100);
	textSize(fontsize);
	textAlign(CENTER, CENTER);
	textFont(font);
	textLeading(40);
	fill(255);

	//Peones
	for(let i=0; i<8; i++){
		let p = new Piece(letra[i]+'2','pawn');
		equipoNegro.push(p);
		p = new Piece(letra[i]+'7','pawn');
		equipoBlanco.push(p);
	}

	// Creación del tablero
	for(let n=8; n>0; n--){
		let columna = new Array();
		for (let l=0; l<8; l++){
			let c = 255;
			if (!colorTile)
				c = 30;
			var t = new Tile(c, letra[l],n);
			columna.push(t);
			colorTile = !colorTile;
		}
		colorTile = !colorTile;
		tablero.push(columna);
	}

	for(let i=0; i<8; i++){
		let letter = char(65+i);
		text(letter, 32+20 + (i*40), 16);
		text(letter, 32+20 + (i*40), height - 16);
	}

	let columnNumber = '';
	for(let i=8; i>=1; i--){
		columnNumber = columnNumber+i+'\n';
	}
	text(columnNumber, 16, height/2 + 16);
	text(columnNumber, width - 16, height/2 + 16);
}

function draw() {
	for (let i=0; i<8; i++)
		for (let j=0; j<8; j++)
		tablero[i][j].show();
	for(let i=0; i<equipoNegro.length; i++){
		fill(0);
		equipoNegro[i].show();
	}
	for(let i=0; i<equipoBlanco.length; i++){
		fill(255);
		equipoBlanco[i].show();
	}
}