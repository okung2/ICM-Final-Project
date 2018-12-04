let noiseXArray = [],
  noiseYArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 30);
  stroke(120, 120, 120, 80);
  noFill();


  //
  // for (let noisex = 1; noisex <= (width / 5); noisex++) {
  //   for (let i = 50; i <= width; i += width / 5) {
  //     noiseXArray[noisex] = map((noise((noisex / 100) * frameCount) * width), 0, width, i, i + 100);
  //     console.log(noiseXArray.length);
  //
  //   }
  // }



  // for (let noisex = 1; noisex <= (width / 5); noisex++) {
  //   for (let noisey = 1; noisey <= (height / 3); noisey++) {
  //     for (let i = 50; i <= width; i += width / 5) {
  //       for (let k = 100; k <= height; k += height / 3) {
  //         noiseXArray[noisex] = map((noise((noisex / 100) * frameCount) * width), 0, width, i, i + 100);
  //         noiseYArray[noisey] = map((noise((noisey / 100) * frameCount) * height), 0, height, k - 100, k + 100);
  //       }
  //     }
  //   }
  // }

  for (let x = 50; x <= width; x += width / 5) {
    for (let y = 100; y <= height; y += height / 3) {
      line(x, y, x + 100, y);
      for (let a = x / 50; a <= width / 50; a++) {
        for (let b = y / 100; b <= height / 100; b++) {
          noiseXArray[a] = map((noise((a / 100) * frameCount) * width), 0, width, x, x + 100);
          noiseYArray[b] = map((noise((b / 100) * frameCount) * height), 0, height, y - 100, y + 100);
        }
      }
      for (let z = x; z <= x + 100; z += 5) {
        for (let c = 1; c <= noiseXArray.length; c++) {
          for (let j = 1; j <= noiseYArray.length; j++) {
            line(z, y, noiseXArray[c], noiseXArray[j]); //noiseYArray[j]);
            console.log(noiseXArray.length);
            // }
          }
        }
      }
    }
  }


  // for (let noisex = 1; noisex <= (width / 5); noisex++) {
  //   for (let noisey = 1; noisey <= (height / 3); noisey++) {
  //     noiseXArray[noisex] = map((noise((noisex / 100) * frameCount) * width), 0, width, x, x + 100);
  //     noiseYArray[noisey] = map((noise((noisey / 100) * frameCount) * height), 0, height, y - 100, y + 100);
  // for (let z = x; z <= x + 100; z += 5) {
  //   line(z, y, noiseXArray[noisex], noiseYArray[noisey]);
  //   //   }
  //   // }
  // }
  // for (let x = 50; x <= width; x += width / 5) {
  //   for (let y = 100; y <= height; y += height / 3) {
  //     line(x, y, x + 100, y);
  //     for (let z = x; z <= x + 100; z += 5) {
  //       line(z, y, x1coord, y1coord);
  //     }
  //   }
  // }

}

// line(50, 100, 150, 100);
// line(350, 100, 250, 100);
// line(50, 300, 150, 300);
// line(350, 300, 250, 300);
// var noiseX = noise(.01 * frameCount) * 400;
// var noiseY = noise(.01 * frameCount) * 400;
// var x1coord = map(noiseX, 0, 400, 50, 150);
// var y1coord = map(noiseY, 0, 400, 0, 200);
// var noiseX2 = noise(.02 * frameCount) * 400;
// var noiseY2 = noise(.02 * frameCount) * 400;
// var x2coord = map(noiseX2, 0, 400, 250, 350);
// var y2coord = map(noiseY2, 0, 400, 0, 200);
// var noiseX3 = noise(.03 * frameCount) * 400;
// var noiseY3 = noise(.03 * frameCount) * 400;
// var x3coord = map(noiseX3, 0, 400, 250, 350);
// var y3coord = map(noiseY3, 0, 400, 200, 400);
// var noiseX4 = noise(.04 * frameCount) * 400;
// var noiseY4 = noise(.04 * frameCount) * 400;
// var x4coord = map(noiseX4, 0, 400, 50, 150);
// var y4coord = map(noiseY4, 0, 400, 200, 400);
// for (let x = 50; x <= 150; x += 5) {
//   line(x, 100, x1coord, y1coord);
// }
// for (let x = 250; x <= 350; x += 5) {
//   line(x, 100, x2coord, y2coord);
// }
// for (let x = 250; x <= 350; x += 5) {
//   line(x, 300, x3coord, y3coord);
// }
// for (let x = 50; x <= 150; x += 5) {
//   line(x, 300, x4coord, y4coord);