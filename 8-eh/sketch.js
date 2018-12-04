function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(120, 120, 120);
  var randomX = random(width);
  var randomY = random(height);
  for (let x = 0; x <= width + 20; x += width / 20) {
    for (let y = 0; y <= height + 20; y += height / 20) {
      line(x, y, randomX, randomY);
    }
  }
}