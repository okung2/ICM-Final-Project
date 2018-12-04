function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 30);
  var noiseY = noise(.01 * frameCount) * 400;

  var y1coord = map(noiseY, 0, height, 0, height / 6);
  var y2coord = map(noiseY, 0, height, height / 6, 2 * (height / 6));
  var y3coord = map(noiseY, 0, height, 2 * (height / 6), 3 * (height / 6));
  var y4coord = map(noiseY, 0, height, 3 * (height / 6), 4 * (height / 6));
  var y5coord = map(noiseY, 0, height, 4 * (height / 6), 5 * (height / 6));
  var y6coord = map(noiseY, 0, height, 5 * (height / 6), height);

  stroke(0, noiseY, noiseY, y1coord);

  for (let x = 30; x <= width + 100; x += width / 10) {
    for (let y = 0; y <= height + 100; y += height / 6) {
      line(x, y, x + 50, y);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, 0, x + 25, y1coord);
    }
  }

  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, height / 6, x + 25, y2coord);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, height / 6, x + 25, y1coord);
    }
  }

  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 2, x + 25, y2coord);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 2, x + 25, y3coord);
    }
  }

  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 3, x + 25, y4coord);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 3, x + 25, y3coord);
    }
  }

  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 4, x + 25, y4coord);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 4, x + 25, y5coord);
    }
  }

  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 5, x + 25, y6coord);
    }
  }

  for (let x = 30; x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, (height / 6) * 5, x + 25, y5coord);
    }
  }
  for (let x = 30 + (width / 10); x <= width + 100; x += 2 * (width / 10)) {
    for (let i = x; i <= x + 50; i += 5) {
      line(i, height, x + 25, y6coord);
    }
  }

}