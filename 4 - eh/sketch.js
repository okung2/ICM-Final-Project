function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(120, 0, 60);
  var x1 = random(width);
  var y1 = random(height);
  ellipse(x1, y1, 10, 10);
  fill(60, 0, 120);
  var x2 = random(width);
  var y2 = random(height);
  ellipse(x2, y2, 10, 10);
  fill(120, 0, 240);
  var x3 = random(width);
  var y3 = random(height);
  ellipse(x3, y3, 10, 10);
}