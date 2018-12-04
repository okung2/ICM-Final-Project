var noiseScale = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (var x = -2; x <= width; x += 5) {
    for (var y = -2; y <= height; y += 5) {
      var noiseVal = noise((frameCount + x) * noiseScale, (frameCount + y) * noiseScale);
      stroke(noiseVal * 255);
      line(x, y + noiseVal * 80, x, y);
      line(y + noiseVal * 3000, x, y, x);
    }
  }
}