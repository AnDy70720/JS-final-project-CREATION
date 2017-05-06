var bgImg = document.createElement('img');
bgImg.src = 'images/map.png';
var canvas =  document.getElementBylId('game-canvas');
var ctx = canvas.getContext('2d');
function draw(){
	ctx.drawImage(bgImg,0,0);
}
setTimeout(draw,1000);
