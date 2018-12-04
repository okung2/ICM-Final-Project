function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill();
  var noiseX = width * noise(.05 * frameCount);
  var noiseY = height * noise(.04 * frameCount);
  stroke(noiseX, noiseY);
  for (let x = -10; x <= width; x += 200) {
    for (let y = 25; y <= height; y += 200) {
      line(x, y, x + 100, y);
      for (let z = x; z <= x + 100; z += 5) {
        line(z, y, noiseX, noiseY);
      }
    }
  }

}