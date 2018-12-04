var noiseScale = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill();
  var noiseVal = noise((frameCount) * noiseScale, (frameCount) * noiseScale);
  stroke(0, noiseVal * 255, noiseVal * 255, noiseVal * 255);

  for (let k = 0; k <= width; k += 5) {
    rect(k, k / 4, k / 6, k / 6);
  }
  stroke(noiseVal * 255, 0, noiseVal * 255, noiseVal * 255);

  for (let h = 0; h <= width; h += 10) {
    rect(h, h / 2, h / 4, h / 4);
  }
  stroke(noiseVal * 255, noiseVal * 255, 0, noiseVal * 255);

  for (let r = 0; r <= width; r += 15) {
    rect(r, r, r / 2, r / 2);
  }
}