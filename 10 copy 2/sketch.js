var noiseScale = 0.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y += 5) {

    for (var x = 0; x <= width; x += 5) {
      // for (var y = 0; y <= windowHeight; y += 5) {
      var noiseVal = noise((frameCount + x) * noiseScale, (frameCount + y) * noiseScale);

      stroke(noiseVal * 255);
      line(x, y + noiseVal, x, y);
    }
  }
}