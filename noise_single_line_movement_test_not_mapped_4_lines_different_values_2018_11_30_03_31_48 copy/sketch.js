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
  var noiseX = noise(.05 * frameCount) * width;
  var noiseY = noise(.05 * frameCount) * height;
  var noiseX2 = noise(.06 * frameCount) * width;
  var noiseY2 = noise(.06 * frameCount) * height;
  var noiseX3 = noise(.07 * frameCount) * width;
  var noiseY3 = noise(.07 * frameCount) * height;
  var noiseX4 = noise(.04 * frameCount) * width;
  var noiseY4 = noise(.04 * frameCount) * height;

  for (let x = 50; x < windowWidth + 50; x += 100) {
    for (let y = 100; y < windowHeight; y += 200) {
      line(x, y, x + 100, y);
      for (let z = x; z <= x + 100; z += 5) {
        line(z, y, noiseX, noiseY);
      }
      // for (let i = )
      // for(let i = x; i<=x+50; i+=5) {
      //   line(i,y,y,noiseY);
      // }

    }
  }

  for (let x = 50; x <= 150; x += 5) {
    line(x, 100, noiseX, noiseY);
  }

  for (let x = 250; x <= 350; x += 5) {
    line(x, 100, noiseX2, noiseY2);
  }

  for (let x = 250; x <= 350; x += 5) {
    line(x, 300, noiseX3, noiseY3);
  }

  for (let x = 50; x <= 150; x += 5) {
    line(x, 300, noiseX4, noiseY4);
  }
}