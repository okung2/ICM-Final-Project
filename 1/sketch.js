function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(120, 0, 60, 30);
  var x1 = windowWidth * noise((.02) * frameCount);
  var y1 = windowHeight * noise((.04) * frameCount);
  ellipse(x1, y1, 10, 10);
  fill(60, 0, 120, 30);
  var x2 = windowWidth * noise(.03 * frameCount);
  var y2 = windowHeight * noise(.05 * frameCount);
  ellipse(x2, y2, 10, 10);
  fill(120, 0, 240, 30);
  var x3 = windowWidth * noise(.01 * frameCount);
  var y3 = windowHeight * noise(.06 * frameCount);
  ellipse(x3, y3, 10, 10);
}