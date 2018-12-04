function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 30);
  stroke(120, 120, 120, 80);
  noFill();
  var noiseX = noise(.01 * frameCount) * 400;
  var noiseY = noise(.01 * frameCount) * 400;
  var x1coord = map(noiseX, 0, 400, 50, 150);
  var y1coord = map(noiseY, 0, 400, 0, 200);
  stroke(noiseX, noiseY);

  line(50, 100, 150, 100);
  line(350, 100, 250, 100);
  line(50, 300, 150, 300);
  line(350, 300, 250, 300);
  for (let x = 50; x <= 150; x += 5) {
    line(x, 100, x1coord, y1coord);
  }

  var noiseX2 = noise(.02 * frameCount) * 400;
  var noiseY2 = noise(.02 * frameCount) * 400;
  var x2coord = map(noiseX2, 0, 400, 250, 350);
  var y2coord = map(noiseY2, 0, 400, 0, 200);
  stroke(noiseX2, noiseY2);

  for (let x = 250; x <= 350; x += 5) {
    line(x, 100, x2coord, y2coord);
  }

  var noiseX3 = noise(.03 * frameCount) * 400;
  var noiseY3 = noise(.03 * frameCount) * 400;
  var x3coord = map(noiseX3, 0, 400, 250, 350);
  var y3coord = map(noiseY3, 0, 400, 200, 400);
  stroke(noiseX3, noiseY3);


  for (let x = 250; x <= 350; x += 5) {
    line(x, 300, x3coord, y3coord);
  }

  var noiseX4 = noise(.04 * frameCount) * 400;
  var noiseY4 = noise(.04 * frameCount) * 400;

  var x4coord = map(noiseX4, 0, 400, 50, 150);
  var y4coord = map(noiseY4, 0, 400, 200, 400);

  stroke(noiseX4, noiseY4);

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