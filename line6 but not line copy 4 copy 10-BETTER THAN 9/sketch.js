 let noiseA = [],
   noise1A = [],
   noise2A = [];

 function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(30);
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

   // noiseA = {
   //   0: noise(.01 * frameCount) * width,
   //   1: noise(.02 * frameCount) * height,
   //   2: noise(.03 * frameCount) * width,
   //   3: noise(.04 * frameCount) * height,
   //   4: noise(.05 * frameCount) * width,
   //   5: noise(.06 * frameCount) * height,
   //   6: noise(.07 * frameCount) * width,
   //   7: noise(.08 * frameCount) * height
   // };
   //
   // noise1A = {
   //   0: noise(.01 * frameCount) * height,
   //   1: noise(.02 * frameCount) * width / 2,
   //   2: noise(.03 * frameCount) * height,
   //   3: noise(.04 * frameCount) * width / 2,
   //   4: noise(.05 * frameCount) * height,
   //   5: noise(.06 * frameCount) * width / 2,
   //   6: noise(.07 * frameCount) * height,
   //   7: noise(.08 * frameCount) * width / 2
   // }
   //
   // noise2A = {
   //   0: noise(.01 * frameCount) * height / 2,
   //   1: noise(.02 * frameCount) * width / 2,
   //   2: noise(.03 * frameCount) * height / 2,
   //   3: noise(.04 * frameCount) * width / 2,
   //   4: noise(.05 * frameCount) * height / 2,
   //   5: noise(.06 * frameCount) * width / 2,
   //   6: noise(.07 * frameCount) * height / 2,
   //   7: noise(.08 * frameCount) * width / 2
   // }
   //
   //
   // stroke(0, noiseA[0], noiseA[2]);
   // x = 1;
   // bezier(noiseA[x], noiseA[x + 1], noiseA[x + 2], noiseA[x + 3], noiseA[x + 4], noiseA[x + 5], noiseA[x + 6], noiseA[x + 7]);
   // stroke(220);
   // for (x = 0; x <= noiseA.length; x++) {
   //   bezier(noiseA[x], noiseA[x + 1], noiseA[x + 2], noiseA[x + 3], noiseA[x + 4], noiseA[x + 5], noiseA[x + 6], noiseA[x + 7]);
   // }
   // for (x = 3; x <= noiseA.length + 3; x++) {
   //   bezier()
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

   var noise21 = noise(.01 * frameCount) * height / 2;
   var noise22 = noise(.02 * frameCount) * width / 2;
   var noise23 = noise(.03 * frameCount) * height / 2;
   var noise24 = noise(.04 * frameCount) * width / 2;
   var noise25 = noise(.05 * frameCount) * height / 2;
   var noise26 = noise(.06 * frameCount) * width / 2;
   var noise27 = noise(.07 * frameCount) * height / 2;
   var noise28 = noise(.08 * frameCount) * width / 2;

   stroke(0, noise1, noise2);

   bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
   bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
   bezier(noise11 - 100, noise12 - 100, noise13 - 100, noise14 - 100, noise15 - 100, noise16 - 100, noise17 - 100, noise18 - 100);
   bezier(noise13 - 100, noise14 - 100, noise11 - 100, noise12 - 100, noise17 - 100, noise18 - 100, noise15 - 100, noise16 - 100);
   bezier(noise21, noise22, noise23, noise24, noise25, noise26, noise27, noise28);
   bezier(noise23, noise24, noise21, noise22, noise27, noise28, noise25, noise26);

   shearX(noise1);
   shearY(noise11);
   stroke(noise11, 0, noise12);

   bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
   bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
   bezier(noise11, noise12, noise13, noise14, noise15, noise16, noise17, noise18);
   bezier(noise13, noise14, noise11, noise12, noise17, noise18, noise15, noise16);
   bezier(noise21, noise22, noise23, noise24, noise25, noise26, noise27, noise28);
   bezier(noise23, noise24, noise21, noise22, noise27, noise28, noise25, noise26);

   shearX(noise4);
   shearY(noise14);
   stroke(noise14, noise16, 0);

   bezier(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8);
   bezier(noise3, noise4, noise1, noise2, noise7, noise8, noise5, noise6);
   bezier(noise11, noise12, noise13, noise14, noise15, noise16, noise17, noise18);
   bezier(noise13, noise14, noise11, noise12, noise17, noise18, noise15, noise16);
   bezier(noise21, noise22, noise23, noise24, noise25, noise26, noise27, noise28);
   bezier(noise23, noise24, noise21, noise22, noise27, noise28, noise25, noise26);

 }