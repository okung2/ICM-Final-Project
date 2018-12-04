function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,30);
  stroke(120, 120, 120, 80);
  noFill();
  var noiseX = noise(.05 * frameCount) * 400;
    var noiseY = noise(.05 * frameCount) * 400;
  var x1coord = map(noiseX, 0,400,50,150);
    var y1coord = map(noiseY, 0,400,0,200);

  line(50, 100, 150, 100);
  line(350, 100, 250, 100);
  line(50, 300, 150, 300);
  line(350, 300, 250, 300);
  for (let x = 50; x <= 150; x += 5) {
    line(x, 100, x1coord, y1coord);
  }
  var x2coord =map(noiseX, 0,400,250,350);
    var y2coord =map(noiseY, 0,400,0,200);

  // var noiseX2 = noise(.06 * frameCount) * 200;
  // var noiseY2 = noise(.06 * frameCount) * 200;
  for (let x = 250; x <= 350; x += 5) {
    line(x, 100, x2coord, y2coord);
  }
	
  var x3coord = map(noiseX, 0, 400, 250,350);
  var y3coord = map(noiseY,0,400,200,400);
  // var noiseX3 = noise(.07 * frameCount) * 200;
  // var noiseY3 = noise(.07 * frameCount) * 200;

  for (let x = 250; x <= 350; x += 5) {
    line(x, 300, x3coord, y3coord);
  }

  // var noiseX4 = noise(.04 * frameCount) * 200;
  // var noiseY4 = noise(.04 * frameCount) * 200;

	var x4coord = map(noiseX, 0,400,50,150);
  var y4coord = map(noiseY,0,400,200,400);
  for (let x = 50; x <= 150; x += 5) {
    line(x, 300, x4coord, y4coord);
  }


  // line(100,height/2,300,height/2);

  // for(let x = 100; x<=300; x+=20) {
  // // for (let y = height; 0 <= y; y-= 20) {
  // line(x,height/2,noiseX, noiseY);
  // }
}

//}