function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(120, 120, 120);
  var noiseX = noise(.07 * frameCount) * width;
  var noiseY = noise(.05 * frameCount) * height;
  for (let x = 0; x <= width; x += width / 20) {
    for (let y = 0; y <= height + 20; y += height / 20) {
      line(x, y, noiseX, noiseY);
    }
  }
}