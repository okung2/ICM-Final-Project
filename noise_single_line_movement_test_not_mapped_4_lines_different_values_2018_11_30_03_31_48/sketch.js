let xarray = [],
  yarray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(120, 120, 120, 80);
  noFill();
  // for (let x = 0; x < )
  var noiseX = noise(.05 * frameCount) * 400;
  var noiseY = noise(.05 * frameCount) * 400;

  for (let x = 50; x < windowWidth + 50; x += 100) {
    for (let y = 100; y < windowHeight; y += 200) {
      line(x, y, x + 100, y);
      // for(let i = x; i<=x+50; i+=5) {
      //   line(i,y,y,noiseY);
      // }

    }
  }
  // line(50, 100, 150, 100);
  // line(350, 100, 250, 100);
  // line(50, 300, 150, 300);
  // line(350, 300, 250, 300);
  for (let x = 50; x <= 150; x += 5) {
    line(x, 100, noiseX, noiseY);
  }

  var noiseX2 = noise(.06 * frameCount) * 200;
  var noiseY2 = noise(.06 * frameCount) * 200;
  for (let x = 250; x <= 350; x += 5) {
    line(x, 100, noiseX2, noiseY2);
  }

  var noiseX3 = noise(.07 * frameCount) * 200;
  var noiseY3 = noise(.07 * frameCount) * 200;

  for (let x = 250; x <= 350; x += 5) {
    line(x, 300, noiseX3, noiseY3);
  }

  var noiseX4 = noise(.04 * frameCount) * 200;
  var noiseY4 = noise(.04 * frameCount) * 200;


  for (let x = 50; x <= 150; x += 5) {
    line(x, 300, noiseX4, noiseY4);
  }

}