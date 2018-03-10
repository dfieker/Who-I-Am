
var bottle = 100
var nextbottle = bottle - 1
var nextnextbottle = bottle - 2


while(nextbottle > 0){
	console.log(nextbottle + " bottles of milk on the wall, " 
	+ nextbottle + " bottles of milk, take one down, pass it around, " + 
	nextnextbottle + " bottles of milk on the wall" );
nextbottle--; nextnextbottle--;
}