window.onload = ()=>{
// Check for support
//
if (!ROT.isSupported()){
	alert("the rot.js library isn't supported by your browser.");
} else{
	// ok
	

// create an 80 x 40 canvas
const display = new ROT.Display({width:80, height:40});
const container = display.getContainer();
document.body.appendChild(Container);

let foreground, background, colors;
for (let i = 0; i<15; i++){
	foreground = ROT.Color.toRGB([
		255 - (i*20),
		255 - (i*20),
		255 - (i*20)
	]);
	background = ROT.Color.toRGB([i*20, i*20, i*20]);
	colors = `%c{${foreground}}%b${background}}`;
	display.drawText(2, i, colors + "Hello, world!");
}
}
}
