function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(120, 120, 120, 30);
  var randomX = random(width);
  var randomY = random(height);
  for (let x = 0; x <= width; x += width / 50) {
    for (let y = 0; y <= height; y += width / 50) {
      line(x, y, randomX, randomY);
    }
  }
}