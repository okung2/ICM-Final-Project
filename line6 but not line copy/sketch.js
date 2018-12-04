function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  background(0, 30);
  noFill();
  var noise1 = noise(.01 * frameCount) * width / 2;
  var noise2 = noise(.02 * frameCount) * width / 2;
  var noise3 = noise(.03 * frameCount) * width / 2;
  var noise4 = noise(.04 * frameCount) * height / 2;

  translate(width / 2, height / 2);
  stroke(0, noise1, noise2, 70);

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      rect(noise1, noise1, 25, 25);
      rotate(noise1);
    }
  }
  stroke(noise3, noise2, 0, 70);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise2, noise2, 25, 25);
      rotate(noise2);
    }
  }
  stroke(noise3, 0, noise4, 70);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise3, noise3, 25, 25);
      rotate(noise3);
    }
  }
  stroke(noise4, noise4, noise4, 70);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise4, noise4, 25, 25);
      rotate(noise4);
    }
  }
}