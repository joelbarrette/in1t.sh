// Made with Zdog

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  zoom: 1,
  resize: 'fullscreen',
  onDragStart: function() {
    isSpinning = false;
  },
});



function colorGradient(fadeFraction, rgbColor1, rgbColor2, rgbColor3) {
    var color1 = rgbColor1;
    var color2 = rgbColor2;
    var fade = fadeFraction;

    // Do we have 3 colors for the gradient? Need to adjust the params.
    if (rgbColor3) {
      fade = fade * 2;

      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = rgbColor2;
        color2 = rgbColor3;
      }
    }
	console.log(color1.red);
    var diffRed = color2.red - color1.red;
    var diffGreen = color2.green - color1.green;
    var diffBlue = color2.blue - color1.blue;

    var gradient = {
      red: parseInt(Math.floor(color1.red + (diffRed * fade)), 10),
      green: parseInt(Math.floor(color1.green + (diffGreen * fade)), 10),
      blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)), 10),
    };
	console.log(gradient.red);
	return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';

};
console.log('hello')
var i=0;
var range = 50;

var color1 = {
		red: 80,
	green: 80,
	blue: 80,

}
var color2 = {
	red: 20,
	green: 20,
	blue: 20,
}

for(i = 0; i < range; i++){
  new Zdog.Box({
	  addTo: illo,
	  width: (10+ i*20),
	  height: 1080,
	  depth: 1, 
	  stroke: false,
	  color: colorGradient((i/range),  color1,  color2),
	  translate: { z: (-25 - 50*i)},
	});

};
var i=0;
for(i = 0; i < range; i++){
  new Zdog.Box({
	  addTo: illo,
	  width: (range*20 - i*20),
	  height: 1080,
	  depth: 1, 
	  stroke: false,
 	  color: colorGradient((i/range), color2, color1), 
	  translate: { z: (-25 - (50 * range) - (50*i))},
	});

};


var i=0;
var range = 50;

var color3 = {
	red: 80,
	green: 80,
	blue: 80,

}
var color4 = {
	red: 20,
	green: 20,
	blue: 20,
}

for(i = 0; i < range; i++){
  new Zdog.Box({
	  addTo: illo,
	  width: (10+ i*20),
	  height: 1080,
	  depth: 1, 
	  stroke: false,
	  color: colorGradient((i/range),  color3,  color4), 
	  translate: { z: (25 + 50*i)},
	});

};
var i=0;
for(i = 0; i < range; i++){
  new Zdog.Box({
	  addTo: illo,
	  width: (range*20 - i*20),
	  height: 1080,
	  depth: 1, 
	  stroke: false,
	  color: colorGradient((i/range), color4, color3 ), 
	  translate: { z: (25 + (50*range) + 50*i)},
	});

};




let ticker = 50;
let cycleCount = 300;

function animate() {
  illo.rotate.y += isSpinning ? 0.001 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();