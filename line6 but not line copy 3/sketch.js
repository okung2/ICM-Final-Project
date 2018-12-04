function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  background(0, 30);
  noFill();
  var noise1 = noise(.06 * frameCount) * width / 2;
  var noise2 = noise(.07 * frameCount) * width / 2;
  var noise3 = noise(.08 * frameCount) * width / 2;
  var noise4 = noise(.09 * frameCount) * height / 2;
  // translate(width / 2, height / 2);
  stroke(0, noise1, noise2);

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      rect(noise1, noise1, 25, 25);
      shearX(noise1);
      shearY(noise4);
      scale(noise2 / 100, noise3 / 1000);
    }
  }
  stroke(noise3, noise2, 0);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise2, noise2, 25, 25);
      shearX(noise2);
      shearY(noise3);
      scale(noise1 / 100, noise4 / 1000);
    }
  }
  stroke(noise3, 0, noise4);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise3, noise3, 25, 25);
      shearX(noise3);
      shearY(noise2);
      scale(noise4 / 1000, noise1 / 100);
    }
  }
  stroke(noise4, noise1, 0);
  for (let x = width; x >= 0; x -= 50) {
    for (let y = height; y >= 0; y -= 50) {
      rect(noise4, noise4, 25, 25);
      shearX(noise4);
      shearY(noise1);
      scale(noise3 / 1000, noise2 / 100);
    }
  }
}