function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0, 30);
  noFill();
  var noiseY = noise(.01 * frameCount) * height;
  stroke(noiseY, noiseY, noiseY, noiseY);

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      rect(x, y, 25, 25);
      rotate(noiseY);
    }
  }

}