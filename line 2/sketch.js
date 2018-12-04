function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 30);
  stroke(120, 120, 120, 80);
  noFill();
  var noiseY = noise(.01 * frameCount) * height;
  var y1coord = map(noiseY, 0, height, 0, (height / 4));
  var y2coord = map(noiseY, 0, height, (height / 4), 2 * ((height / 4)));
  var y3coord = map(noiseY, 0, height, 2 * ((height / 4)), 3 * ((height / 4)));
  var y4coord = map(noiseY, 0, height, 3 * ((height / 4)), height);


  for (let x = 0; x <= width + 100; x += 100) {
    for (let y = 0; y <= height; y += height / 4) {
      line(x, y, x + 50, y);
    }
  }

  for (let x = 0; x <= width + 100; x += 100) {
    for (let y = 0; y <= ((height / 4)); y += height / 4) {
      for (let i = x; i <= x + 50; i += 5) {
        line(i, y, x + 25, y1coord);
      }
    }
  }

  for (let x = 0; x <= width + 100; x += 100) {
    for (let y = ((height / 4)); y <= (2 * ((height / 4))); y += height / 4) {
      for (let i = x; i <= x + 50; i += 5) {
        line(i, y, x + 25, y2coord);
      }
    }
  }

  for (let x = 0; x <= width; x += 100) {
    for (let y = (2 * ((height / 4))); y <= (3 * ((height / 4))); y += height / 4) {
      for (let i = x; i <= x + 50; i += 5) {
        line(i, y, x + 25, y3coord);
      }
    }
  }
  for (let x = 0; x <= width + 100; x += 100) {
    for (let y = (3 * ((height / 4))); y <= height + 100; y += height / 4) {
      for (let i = x; i <= x + 50; i += 5) {
        line(i, y, x + 25, y4coord);
      }
    }
  }
}