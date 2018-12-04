let noiseA = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(10);
  // background(0)
}

function draw() {
  background(0, 30);
  noFill();
  // console.log(noiseA.length);
  // for (let x = 0; x < 10; x += 2) {
  //   for (let y = 1; y < 9; y += 2) {
  //     noiseA[x] = noise(y / 10 * frameCount) * width;
  //   }
  // }
  // for (let x = 1; x < 10; x += 2) {
  //   for (let y = 2; y < 9; y += 2) {
  //     noiseA[x] = noise(y / 10 * frameCount) * height;
  //   }
  // }
  // for (let x = 0; x < noiseA.length; x++) {
  //   bezier(noiseA[x], noiseA[x + 1], noiseA[x + 2], noiseA[x + 3], noiseA[x + 4], noiseA[x + 5], noiseA[x + 6], noiseA[x + 7]);
  // }
  var noise1 = noise(.01 * frameCount) * width;
  var noise2 = noise(.02 * frameCount) * height;
  var noise3 = noise(.03 * frameCount) * width;
  var noise4 = noise(.04 * frameCount) * height;
  var noise5 = noise(.05 * frameCount) * width;
  var noise6 = noise(.06 * frameCount) * height;
  var noise7 = noise(.07 * frameCount) * width;
  var noise8 = noise(.08 * frameCount) * height;

  var noise11 = noise(.01 * frameCount) * height;
  var noise12 = noise(.02 * frameCount) * width / 2;
  var noise13 = noise(.03 * frameCount) * height;
  var noise14 = noise(.04 * frameCount) * width / 2;
  var noise15 = noise(.05 * frameCount) * height;
  var noise16 = noise(.06 * frameCount) * width / 2;
  var noise17 = noise(.07 * frameCount) * height;
  var noise18 = noise(.08 * frameCount) * width / 2;
  // translate(width / 2, height / 2);
  stroke(noise1, noise2, 0);
  bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
  bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
  bezier(noise11, noise12, noise13, noise14, noise15, noise16, noise17, noise18);
  bezier(noise13, noise14, noise11, noise12, noise17, noise18, noise15, noise16);

  shearX(noise1);
  shearY(noise11);
  stroke(noise11, 0, noise12);

  bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
  bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
  bezier(noise11, noise12, noise13, noise14, noise15, noise16, noise17, noise18);
  bezier(noise13, noise14, noise11, noise12, noise17, noise18, noise15, noise16);


  shearX(noise4);
  shearY(noise14);
  stroke(0, noise14, noise16);

  bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
  bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
  bezier(noise11, noise12, noise13, noise14, noise15, noise16, noise17, noise18);
  bezier(noise13, noise14, noise11, noise12, noise17, noise18, noise15, noise16);

  // for (let x = 0; x <= width; x += 100) {
  //   for (let y = 0; y <= height / 2; y += 100) {
  //     ellipse(noise1, noise2, x, y);
  //     rotate(noise1);
  //     shearX(noise1 / 10);
  //     // shearY(noise2 / 10);
  //     // scale(noise2 / 1000, noise3 / 100);
  //   }
  // }
  // // stroke(noise2, noise3, 0);
  // // for (let x = width / 2; x <= width; x += 100) {
  // //   for (let y = height / 2; y <= height; y += 100) {
  // //     ellipse(x, y, noise2, noise3);
  // //     rotate(noise2);
  // //     // rect(noise2, noise2, 25, 25);
  // //     // shearX(noise2);
  // //     // shearX(noise3);
  // //     // scale(noise2 / 1000, noise3 / 100);
  // //   }
  // // }
  // stroke(noise3, 0, noise4);
  // for (let x = 0; x <= width; x += 100) {
  //   for (let y = 0; y <= height; y += 100) {
  //     ellipse(noise3, noise4, x, y);
  //     rotate(noise3);
  //     shearX(noise3 / 10);
  //     // shearY(noise2 / 10);
  //     // scale(noise2 / 1000, noise3 / 100);
  //   }
  // }

  // stroke(noise4, noise1, 0);
  // for (let x = width; x >= 0; x -= 50) {
  //   for (let y = height; y >= 0; y -= 50) {
  //     rect(noise4, noise4, 25, 25);
  //     shearX(noise4);
  //     shearY(noise1);
  //     scale(noise2 / 1000, noise3 / 100);
  //   }
  // }
  //   for (let x1 = 0; x1 <= width; x1 += 25) {
  //     for (let x2 = 0; x2 <= width; x2 += 50) {
  //       for (let y1 = 0; y1 <= height; y1 += 25) {
  //         for (let y2 = 0; y2 <= height; y2 += 50) {
  //           for (let x3 = 0; x3 <= width; x3 += 10) {
  //             for (let y3 = 0; y3 <= height; y3 += 5) {
  //               bezier(noise(x1 / 10) * frameCount, noise(y1 / 10), noise(x2 / 10), noise(y2 / 10), noise(x3 / 10), noise(y3 / 10));
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
}