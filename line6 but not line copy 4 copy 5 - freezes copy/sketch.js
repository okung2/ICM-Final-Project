function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(0)
}

function draw() {
  background(0, 30);
  noFill();
  var noise1 = noise(.01 * frameCount) * width / 2;
  var noise2 = noise(.02 * frameCount) * width / 2;
  var noise3 = noise(.03 * frameCount) * width / 2;
  translate(width / 2, height / 2);
  stroke(0, noise1, noise2);
  for (let x = 0; x <= width; x += 100) {
    for (let y = 0; y <= height / 2; y += 100) {
      ellipse(noise1, noise2, x, y);
      // rect(noise1, noise1, 25, 25);
      shearX(noise1);
      shearY(noise2);
      scale(noise2 / 1000, noise3 / 100);
    }
  }
  stroke(noise2, noise3, 0);
  for (let x = width / 2; x <= width; x += 100) {
    for (let y = height / 2; y <= height; y += 100) {
      ellipse(x, y, noise2, noise3);
      // rect(noise2, noise2, 25, 25);
      shearX(noise2);
      shearY(noise3);
      // scale(noise2 / 1000, noise3 / 100);
    }
  }
}