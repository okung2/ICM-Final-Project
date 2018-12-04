function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 30);
  stroke(120, 120, 120, 80);
  noFill();
  // var noiseY = noise(.01 * frameCount) * 400;
  // var x1coord = map(noiseX, 0, 400, 50, 150);
  // var y1coord = map(noiseY, 0, 400, 0, 200);
  // stroke(noiseX, noiseY);
  // stroke(0, noiseX, 0, noiseY);
  var noiseY = noise(.01 * frameCount) * windowHeight;
  var y1coord = map(noiseY, 0, 400, 50, 150);
  var y2coord = map(noiseY, 0, 400, 0, 50);

  for (let x = 12.5; x < windowWidth + 25; x += 100) {
    for (let y = 30; y < windowHeight + 50; y += 100) {
      line(x, y, x + 50, y);
      // for(let i = x; i<=x+50; i+=5) {
      //   line(i,y,y,noiseY);
      // }

    }
  }

  //
  // for (let i = 25; i<=75; i+=5) {
  //   line(i,50,50,y1coord);
  // }
  // // var noiseY2 = noise(.02 * frameCount) * 400;
  // // var y2coord = map(noiseY2,0,400,100,150);
  // for(let j = 125; j<=175; j+=5) {
  //   line(j,50,150,y1coord);
  // }
  // for(let k = 225; k<=275; k+=5) {
  //   line(k,50,250,y1coord);
  // }
  //
  // for (let h = 325;h<=375; h+=5) {
  //   line(h, 50,350,y1coord);
  // }
  //
  // for (let i = 25; i<=75; i+=5) {
  //   line(i,150,50,y1coord);
  // }
  // for(let j = 125; j<=175; j+=5) {
  //   line(j,150,150,y1coord);
  // }
  // for(let k = 225; k<=275; k+=5) {
  //   line(k,150,250,y1coord);
  // }
  // for (let h = 325;h<=375; h+=5) {
  //   line(h, 150,350,y1coord);
  // }
  // for (let i = 25; i<=75; i+=5) {
  //   line(i,250,50,y1coord);
  // }
  // for(let j = 125; j<=175; j+=5) {
  //   line(j,250,150,y1coord);
  // }
  // for(let k = 225; k<=275; k+=5) {
  //   line(k,250,250,y1coord);
  // }
  // for (let h = 325;h<=375; h+=5) {
  //   line(h, 250,350,y1coord);
  // }
  // for (let i = 25; i<=75; i+=5) {
  //   line(i,350,50,y1coord);
  // }
  // for(let j = 125; j<=175; j+=5) {
  //   line(j,350,150,y1coord);
  // }
  // for(let k = 225; k<=275; k+=5) {
  //   line(k,350,250,y1coord);
  // }
  // for (let h = 325;h<=375; h+=5) {
  //   line(h, 350,350,y1coord);
  // }
}
//   line(50, 100, 150, 100);

//   for (let x = 50; x <= 150; x += 5) {
//     line(x, 100, x1coord, y1coord);
//   }

//   var noiseX2 = noise(.02 * frameCount) * 400;
//   var noiseY2 = noise(.02 * frameCount) * 400;
//   var x2coord = map(noiseX2, 0, 400, 250, 350);
//   var y2coord = map(noiseY2, 0, 400, 0, 200);
//   // stroke(noiseX2, noiseY2);
//   stroke(0, noiseX2, 0, noiseY2);
//   line(350, 100, 250, 100);

//   for (let x = 250; x <= 350; x += 5) {
//     line(x, 100, x2coord, y2coord);
//   }

//   var noiseX3 = noise(.03 * frameCount) * 400;
//   var noiseY3 = noise(.03 * frameCount) * 400;
//   var x3coord = map(noiseX3, 0, 400, 250, 350);
//   var y3coord = map(noiseY3, 0, 400, 200, 400);
//   // stroke(noiseX3, noiseY3);
//   stroke(0, noiseX3, 0, noiseY3);
//   line(350, 300, 250, 300);

//   for (let x = 250; x <= 350; x += 5) {
//     line(x, 300, x3coord, y3coord);
//   }

//   var noiseX4 = noise(.04 * frameCount) * 400;
//   var noiseY4 = noise(.04 * frameCount) * 400;

//   var x4coord = map(noiseX4, 0, 400, 50, 150);
//   var y4coord = map(noiseY4, 0, 400, 200, 400);

//   // stroke(noiseX4, noiseY4);
//   stroke(0, noiseX4, 0, noiseY4);
//   line(50, 300, 150, 300);

//   for (let x = 50; x <= 150; x += 5) {
//     line(x, 300, x4coord, y4coord);
//   }


//   // line(100,height/2,300,height/2);

//   // for(let x = 100; x<=300; x+=20) {
//   // // for (let y = height; 0 <= y; y-= 20) {
//   // line(x,height/2,noiseX, noiseY);
//   // }
// }

// //}