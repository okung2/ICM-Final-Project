function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
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

  for (let x = 10; x <= width; x += width / 10) {
    for (let y = 10; y <= height + 100; y += height / 5) {
      // line(x, y, x + 100, y);
      var noiseX = noise(x / 100 * frameCount) * width;
      var noiseY = noise(y / 100 * frameCount) * height;
      var x1coord = map(noiseX, 0, width, x, x + 100);
      var y1coord = map(noiseY, 0, height, y - 100, y + 100);
      stroke(0, noiseX, 0, noiseY);
      line(x, y, x + 100, y);

      for (let z = x; z <= x + 100; z += 5) {
        line(z, y, x1coord, y1coord);

      }
      // for (let l = 0; l <= width / 5; l += 5) {
      //   let xend = map((noise((l / 100) * frameCount) * width), 0, width, x, x + 100);
      //   // for (let j = 0; j <= height / 3; j += 5) {
      //   let yend = map((noise((l / 100) * frameCount) * height), 0, height, y - 100, y + 100);
      //   line(x, y, xend, yend);
      //   // }
      // }
    }
  }
}
//       for (let l = 0; l < 10; l++) {
//         let xend = map((noise((l / 100) * frameCount) * width), 0, width, x, x + 100);
//         let yend = map((noise((l / 100) * frameCount) * height), 0, height, y - 100, y + 100);
//         line(x, y, xend, yend);
//       }
//       // for (let a = x / 50; a <= width / 50; a++) {
//       //   for (let b = y / 100; b <= height / 100; b++) {
//       //     noiseXArray[a] = map((noise((a / 100) * frameCount) * width), 0, width, x, x + 100);
//       //     noiseYArray[b] = map((noise((b / 100) * frameCount) * height), 0, height, y - 100, y + 100);
//       //   }
//       // }
//       // for (let z = x; z <= x + 100; z += 5) {
//       //   for (let c = 1; c <= noiseXArray.length; c++) {
//       //     for (let j = 1; j <= noiseYArray.length; j++) {
//       //       line(z, y, noiseXArray[c], noiseXArray[j]); //noiseYArray[j]);
//       //       console.log(noiseXArray.length);
//       //       // }
//       //     }
//       //   }
//     }
//   }
// }


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

// }