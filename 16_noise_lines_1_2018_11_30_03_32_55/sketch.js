function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 50);
  stroke(120, 120, 120, 80);
  noFill();
  var noiseY = noise(.01 * frameCount) * height;
  var y1coord = map(noiseY, 0, height, 50, 150);

  for (let x = 35; x <= width + 50; x += width / 10) {
    for (let y = 35; y <= height + 20; y += height / 7) {
      line(x, y, x + 50, y);
      for (let i = x; i <= x + 50; i += 5) {
        line(i, y, x + 25, y1coord);
      }
      // for (let i = 50; i <= 350; i += 100) {
      //   for (let j = 25; j <= 375; j += 100) {
      //     for (let k = j; k <= j + 50; j += 5) {
      //       line(k, i, i, y1coord);
      //     }
      //   }
      // }
    }
  }
  // for (let i = 50; i <=350; i+=100){
  //   for (let j = 25; j<=375; j+=100){
  //     for (let k = j; k<=j+50; j+=5){
  //       let (k,i,i,y1coord);
  //     }
  //   }
  // }
  // for (let i = 25; i <= 75; i += 5) {
  //   line(i, 50, 50, y1coord);
  // }
  //
  // for (let j = 125; j <= 175; j += 5) {
  //   line(j, 50, 150, y1coord);
  // }
  // for (let k = 225; k <= 275; k += 5) {
  //   line(k, 50, 250, y1coord);
  // }
  //
  // for (let h = 325; h <= 375; h += 5) {
  //   line(h, 50, 350, y1coord);
  // }
  //
  // for (let i = 25; i <= 75; i += 5) {
  //   line(i, 150, 50, y1coord);
  // }
  // for (let j = 125; j <= 175; j += 5) {
  //   line(j, 150, 150, y1coord);
  // }
  // for (let k = 225; k <= 275; k += 5) {
  //   line(k, 150, 250, y1coord);
  // }
  // for (let h = 325; h <= 375; h += 5) {
  //   line(h, 150, 350, y1coord);
  // }
  // for (let i = 25; i <= 75; i += 5) {
  //   line(i, 250, 50, y1coord);
  // }
  // for (let j = 125; j <= 175; j += 5) {
  //   line(j, 250, 150, y1coord);
  // }
  // for (let k = 225; k <= 275; k += 5) {
  //   line(k, 250, 250, y1coord);
  // }
  // for (let h = 325; h <= 375; h += 5) {
  //   line(h, 250, 350, y1coord);
  // }
  // for (let i = 25; i <= 75; i += 5) {
  //   line(i, 350, 50, y1coord);
  // }
  // for (let j = 125; j <= 175; j += 5) {
  //   line(j, 350, 150, y1coord);
  // }
  // for (let k = 225; k <= 275; k += 5) {
  //   line(k, 350, 250, y1coord);
  // }
  // for (let h = 325; h <= 375; h += 5) {
  //   line(h, 350, 350, y1coord);
  // }
}