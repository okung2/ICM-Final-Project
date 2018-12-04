// var numOfSketch = 5;
var WINDOWWIDTH = window.screen.width;
var WINDOWHEIGHT = window.screen.height;

//one = 10 - last
//two = 10 copy 3
//three = 10 copy 2
//four = line 3 color copy
//five = noise_single_line_movement_test_mapped_4_different_noise_2018_11_30_03_31_59 copy 4
//six = line6 but not line
//seven = line6 but not line copy
//eight = line6 but not line copy 4 copy
//nine = line6 but not line copy 4 copy 4
//ten = line6 but not line copy 4 copy 6
//eleven = line6 but not line copy 4 copy 7
//twelve = line6 but not line copy 4 copy 8
//thirteen = line6 but not line copy 4 copy 9
//fourteen = line6 but not line copy 4 copy 10-BETTER THAN 9

function setup() {
  var cnv = createCanvas(WINDOWWIDTH, WINDOWHEIGHT);

  cnv.parent('sketch-holder'); // this is the id of the div
  cnv.position(0, 0); // this gives the sketch an absolute position in the top left corner
}

// function keyTyped() {
//   if (key === ' ') {
//     resetSketch();
//   }
// }
// function removeElement() {
//   // Removes an element from the document
//   var element = document.getElementById(sketch.js);
//   element.parentNode.removeChild(element);
// }

// function resetSketch() {
function keyTyped() {
  if (key === 'a') {
    // one = 10 - last
    new p5(function(one) {
      one.noiseScale = .02;
      one.setup = function() {
        one.clear();
        one.cnv = one.createCanvas(WINDOWWIDTH, WINDOWHEIGHT);
        one.cnv.parent('sketch-holder');
      };

      one.draw = function() {
        one.background(0);
        for (one.x = 0; one.x <= one.width; one.x += 5) {
          for (one.y = 0; one.y <= one.height; one.y += 5) {
            one.noiseVal = one.noise((one.frameCount + one.x) * one.noiseScale, (one.frameCount + one.y) * one.noiseScale);
            one.stroke(one.noiseVal * 255);
            one.line(one.y + one.noiseVal * 80, one.x, one.y, one.x);
          }
        }
      };
      // one.mousePressed = function() {
      //   if (one.mouseX < one.width && one.mouseY < one.height) {
      //     one.resizeCanvas(one.windowWidth, one.windowHeight);
      //   }
      // }
      //
      // one.mouseReleased = function() {
      //   one.resizeCanvas(200, 200);
      // }
    }, "sketch1");
  } else if (key === 's') {
    //two = 10 copy 3
    new p5(function(two) {
      // two.clear();

      two.noiseScale = 0.02;
      two.setup = function() {
        two.createCanvas(two.windowWidth, two.windowHeight);
      };
      two.draw = function() {
        two.background(0);
        for (two.y = 0; two.y <= two.height; two.y += 5) {
          for (two.x = 0; two.x <= two.width; two.x += 5) {
            two.noiseVal = two.noise((two.frameCount + two.x) * two.noiseScale, (two.frameCount + two.y) * two.noiseScale);
            two.stroke(two.noiseVal * 255);
            two.line(two.x, two.y + two.noiseVal, two.x, two.y);
          }
        }
      };
      // two.mousePressed = function() {
      //   if (two.mouseX < two.width && two.mouseY < two.height) {
      //     two.resizeCanvas(two.windowWidth, two.windowHeight);
      //   }
      // }
      // two.mouseReleased = function() {
      //   two.resizeCanvas(200, 200);
      // }
    }, "sketch2");

  } else if (key === 'd') {
    //three = 10 copy 2
    new p5(function(three) {
      three.noiseScale = 0.3;
      three.setup = function() {
        three.createCanvas(three.windowWidth, three.windowHeight);
      };
      three.draw = function() {
        three.background(0);
        for (three.y = 0; three.y <= three.height; three.y += 5) {
          for (three.x = 0; three.x <= three.width; three.x += 5) {
            three.noiseVal = three.noise((three.frameCount + three.x) * three.noiseScale, (three.frameCount + three.y) * three.noiseScale);
            three.stroke(three.noiseVal * 255);
            three.line(three.x, three.y + three.noiseVal, three.x, three.y);
          }
        }
      };
      // three.mousePressed = function() {
      //   if (three.mouseX < three.width && three.mouseY < three.height) {
      //     three.resizeCanvas(three.windowWidth, three.windowHeight);
      //   }
      // }
      // three.mouseReleased = function() {
      //   three.resizeCanvas(200, 200);
      // }
    }, "sketch3");

  } else if (key === 'f') {
    //four = line 3 color copy
    new p5(function(four) {
      four.setup = function() {
        four.createCanvas(four.windowWidth, four.windowHeight);
      }

      four.draw = function() {
        four.background(0, 30);
        four.fill(120, 0, 60, 30);
        four.noiseY = four.noise(.01 * four.frameCount) * 400;
        four.y1coord = four.map(four.noiseY, 0, four.height, 0, four.height / 6);
        four.y2coord = four.map(four.noiseY, 0, four.height, four.height / 6, 2 * (four.height / 6));
        four.y3coord = four.map(four.noiseY, 0, four.height, 2 * (four.height / 6), 3 * (four.height / 6));
        four.y4coord = four.map(four.noiseY, 0, four.height, 3 * (four.height / 6), 4 * (four.height / 6));
        four.y5coord = four.map(four.noiseY, 0, four.height, 4 * (four.height / 6), 5 * (four.height / 6));
        four.y6coord = four.map(four.noiseY, 0, four.height, 5 * (four.height / 6), four.height);

        four.stroke(0, four.noiseY, four.noiseY, four.y1coord);

        for (four.x = 30; four.x <= four.width + 100; four.x += four.width / 10) {
          for (four.y = 0; four.y <= four.height + 100; four.y += four.height / 6) {
            four.line(four.x, four.y, four.x + 50, four.y);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, 0, four.x + 25, four.y1coord);
          }
        }

        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, four.height / 6, four.x + 25, four.y2coord);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, four.height / 6, four.x + 25, four.y1coord);
          }
        }

        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 2, four.x + 25, four.y2coord);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 2, four.x + 25, four.y3coord);
          }
        }

        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 3, four.x + 25, four.y4coord);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 3, four.x + 25, four.y3coord);
          }
        }

        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 4, four.x + 25, four.y4coord);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 4, four.x + 25, four.y5coord);
          }
        }

        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 5, four.x + 25, four.y6coord);
          }
        }

        for (four.x = 30; four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, (four.height / 6) * 5, four.x + 25, four.y5coord);
          }
        }
        for (four.x = 30 + (four.width / 10); four.x <= four.width + 100; four.x += 2 * (four.width / 10)) {
          for (four.i = four.x; four.i <= four.x + 50; four.i += 5) {
            four.line(four.i, four.height, four.x + 25, four.y6coord);
          }
        }
      }

      // four.mousePressed = function() {
      //   if (four.mouseX < four.width && four.mouseY < four.height) {
      //
      //     four.resizeCanvas(four.windowWidth, four.windowHeight);
      //     four.background(0);
      //   }
      // }
      //
      // four.mouseReleased = function() {
      //   four.resizeCanvas(200, 200);
      //   four.background(0);
      // }

    }, "sketch4");
  } else if (key === 'g') {
    //five = noise_single_line_movement_test_mapped_4_different_noise_2018_11_30_03_31_59 copy 4
    new p5(function(five) {
      five.setup = function() {
        five.createCanvas(WINDOWWIDTH, WINDOWHEIGHT);
        five.frameRate(30);
      };

      five.draw = function() {
        five.background(0, 30);
        five.stroke(120, 120, 120, 80);
        five.noFill();

        for (five.x = 10; five.x <= five.width; five.x += five.width / 10) {
          for (five.y = 10; five.y <= five.height + 100; five.y += five.height / 5) {
            // line(x, y, x + 100, y);
            five.noiseX = five.noise(five.x / 100 * five.frameCount) * five.width;
            five.noiseY = five.noise(five.y / 100 * five.frameCount) * five.height;
            five.x1coord = five.map(five.noiseX, 0, five.width, five.x, five.x + 100);
            five.y1coord = five.map(five.noiseY, 0, five.height, five.y - 100, five.y + 100);
            five.stroke(0, five.noiseX, 0, five.noiseY);
            five.line(five.x, five.y, five.x + 100, five.y);

            for (five.z = five.x; five.z <= five.x + 100; five.z += 5) {
              five.line(five.z, five.y, five.x1coord, five.y1coord);
            }
          }
        }
      };
      // five.mousePressed = function() {
      //   if (five.mouseX < five.width && five.mouseY < five.height) {
      //     five.resizeCanvas(five.windowWidth, five.windowHeight);
      //   }
      // }
      // five.mouseReleased = function() {
      //   five.resizeCanvas(200, 200);
      // }
    }, "sketch5");
  } else if (key === 'h') {
    //six = line6 but not line
    new p5(function(six) {
      six.setup = function() {
        six.createCanvas(six.windowWidth, six.windowHeight);
        six.rectMode(six.CENTER);
      };

      six.draw = function() {
        six.background(0, 30);
        six.noFill();

        six.noiseY = six.noise(.01 * six.frameCount) * six.height;
        six.stroke(six.noiseY, six.noiseY, six.noiseY, six.noiseY);

        for (six.x = 0; six.x <= six.width; six.x += 50) {
          for (six.y = 0; six.y <= six.height; six.y += 50) {
            six.rect(six.x, six.y, 25, 25);
            six.rotate(six.noiseY);
          }
        }
      };
      // six.mousePressed = function() {
      //   if (six.mouseX < six.width && six.mouseY < six.height) {
      //     six.resizeCanvas(six.windowWidth, six.windowHeight);
      //   }
      // }
      // six.mouseReleased = function() {
      //   six.resizeCanvas(200, 200);
      // }
    }, "sketch6");
  } else if (key === 'j') {
    //seven = line6 but not line copy
    new p5(function(seven) {
      seven.setup = function() {
        seven.createCanvas(seven.windowWidth, seven.windowHeight);
      };

      seven.draw = function() {
        seven.background(0, 30);
        seven.noFill();
        seven.noise1 = seven.noise(.01 * seven.frameCount) * seven.width / 2;
        seven.noise2 = seven.noise(.02 * seven.frameCount) * seven.width / 2;
        seven.noise3 = seven.noise(.03 * seven.frameCount) * seven.width / 2;
        seven.noise4 = seven.noise(.04 * seven.frameCount) * seven.height / 2;
        seven.translate(seven.width / 2, seven.height / 2);
        seven.stroke(0, seven.noise1, seven.noise2, 70);

        for (seven.x = 0; seven.x <= seven.width; seven.x += 50) {
          for (seven.y = 0; seven.y <= seven.height; seven.y += 50) {
            seven.rect(seven.noise1, seven.noise1, 25, 25);
            seven.rotate(seven.noise1);
          }
        }
        seven.stroke(seven.noise3, seven.noise2, 0, 70);
        for (seven.x = seven.width; seven.x >= 0; seven.x -= 50) {
          for (seven.y = seven.height; seven.y >= 0; seven.y -= 50) {
            seven.rect(seven.noise2, seven.noise2, 25, 25);
            seven.rotate(seven.noise2);
          }
        }
        seven.stroke(seven.noise3, 0, seven.noise4, 70);
        for (seven.x = seven.width; seven.x >= 0; seven.x -= 50) {
          for (seven.y = seven.height; seven.y >= 0; seven.y -= 50) {
            seven.rect(seven.noise3, seven.noise3, 25, 25);
            seven.rotate(seven.noise3);
          }
        }
        seven.stroke(seven.noise4, seven.noise4, seven.noise4, 70);
        for (seven.x = seven.width; seven.x >= 0; seven.x -= 50) {
          for (seven.y = seven.height; seven.y >= 0; seven.y -= 50) {
            seven.rect(seven.noise4, seven.noise4, 25, 25);
            seven.rotate(seven.noise4);
          }
        }
      };
      // seven.mousePressed = function() {
      //   if (seven.mouseX < seven.width && seven.mouseY < seven.height) {
      //     seven.resizeCanvas(seven.windowWidth, seven.windowHeight);
      //   }
      // }
      // seven.mouseReleased = function() {
      //   seven.resizeCanvas(200, 200);
      // }
    }, "sketch7");
  } else if (key === 'k') {
    //eight = line6 but not line copy 4 copy
    new p5(function(eight) {
      eight.setup = function() {
        eight.createCanvas(eight.windowWidth, eight.windowHeight);
      };

      eight.draw = function() {
        eight.background(0, 30);
        eight.noFill();

        eight.noise1 = eight.noise(.06 * eight.frameCount) * eight.width / 2;
        eight.noise2 = eight.noise(.07 * eight.frameCount) * eight.width / 2;
        eight.noise3 = eight.noise(.08 * eight.frameCount) * eight.width / 2;
        eight.noise4 = eight.noise(.09 * eight.frameCount) * eight.height / 2;

        eight.translate(eight.width / 2, eight.height / 2);
        eight.stroke(0, eight.noise1, eight.noise2);

        for (eight.x = 0; eight.x <= eight.width; eight.x += 50) {
          for (eight.y = 0; eight.y <= eight.height; eight.y += 50) {
            eight.rect(eight.noise1, eight.noise1, 25, 25);
            eight.shearX(eight.noise2);
            eight.shearY(eight.noise4);
          }
        }
        eight.stroke(eight.noise3, eight.noise2, 0);
        for (eight.x = eight.width; eight.x >= 0; eight.x -= 50) {
          for (eight.y = eight.height; eight.y >= 0; eight.y -= 50) {
            eight.rect(eight.noise2, eight.noise2, 25, 25);
            eight.shearX(eight.noise1);
            eight.shearY(eight.noise3);
          }
        }
      };
      // eight.mousePressed = function() {
      //   if (eight.mouseX < eight.width && eight.mouseY < eight.height) {
      //     eight.resizeCanvas(eight.windowWidth, eight.windowHeight);
      //   }
      // }
      // eight.mouseReleased = function() {
      //   eight.resizeCanvas(200, 200);
      // }
    }, "sketch8");

  } else if (key === 'l') {
    //nine = line6 but not line copy 4 copy 4
    new p5(function(nine) {
      nine.setup = function() {
        nine.createCanvas(nine.windowWidth, nine.windowHeight);
      };

      nine.draw = function() {
        nine.background(0, 30);
        nine.noFill();

        nine.noise1 = nine.noise(.01 * nine.frameCount) * nine.width / 2;
        nine.noise2 = nine.noise(.02 * nine.frameCount) * nine.width / 2;
        nine.noise3 = nine.noise(.03 * nine.frameCount) * nine.width / 2;

        nine.stroke(0, nine.noise1, nine.noise2, 50);

        for (nine.x = 0; nine.x <= nine.width; nine.x += 100) {
          for (nine.y = 0; nine.y <= nine.height; nine.y += 100) {
            nine.ellipse(nine.x, nine.y, nine.noise1, nine.noise2);
          }
        }

        nine.stroke(nine.noise3, nine.noise2, 0, 50);

        for (nine.x = 0; nine.x <= nine.width; nine.x += 75) {
          for (nine.y = 0; nine.y <= nine.height; nine.y += 75) {
            nine.ellipse(nine.x, nine.y, nine.noise2, nine.noise3);
          }
        }
      };
      // nine.mousePressed = function() {
      //   if (nine.mouseX < nine.width && nine.mouseY < nine.height) {
      //     nine.resizeCanvas(nine.windowWidth, nine.windowHeight);
      //   }
      // }
      // nine.mouseReleased = function() {
      //   nine.resizeCanvas(200, 200);
      // }
    }, "sketch9");
  } else if (key === 'z') {
    //eleven = line6 but not line copy 4 copy 7
    new p5(function(eleven) {
      eleven.setup = function() {
        eleven.createCanvas(eleven.windowWidth, eleven.windowHeight);
      };

      eleven.draw = function() {
        eleven.background(0, 30);
        eleven.noFill();

        eleven.noise1 = eleven.noise(.01 * eleven.frameCount) * eleven.width / 2;
        eleven.noise2 = eleven.noise(.02 * eleven.frameCount) * eleven.width / 2;
        eleven.noise3 = eleven.noise(.03 * eleven.frameCount) * eleven.width / 2;
        eleven.noise4 = eleven.noise(.04 * eleven.frameCount) * eleven.height / 2;
        eleven.translate(eleven.width / 2, eleven.height / 2);
        eleven.stroke(0, eleven.noise1, eleven.noise2);

        for (eleven.x = 0; eleven.x <= eleven.width; eleven.x += 100) {
          for (eleven.y = 0; eleven.y <= eleven.height / 2; eleven.y += 100) {
            eleven.ellipse(eleven.noise1, eleven.noise2, eleven.x, eleven.y);
            eleven.rotate(eleven.noise1);
          }
        }

        eleven.stroke(eleven.noise3, 0, eleven.noise4);
        for (eleven.x = 0; eleven.x <= eleven.width; eleven.x += 100) {
          for (eleven.y = eleven.height / 2; eleven.y <= eleven.height; eleven.y += 100) {
            eleven.ellipse(eleven.noise3, eleven.noise4, eleven.x, eleven.y);
            eleven.rotate(eleven.noise3);
          }
        }
      };
      // eleven.mousePressed = function() {
      //   if (eleven.mouseX < eleven.width && eleven.mouseY < eleven.height) {
      //     eleven.resizeCanvas(eleven.windowWidth, eleven.windowHeight);
      //   }
      // }
      // eleven.mouseReleased = function() {
      //   eleven.resizeCanvas(200, 200);
      // }
    }, "sketch11");
  } else if (key === 'x') {
    //twelve = line6 but not line copy 4 copy 8
    new p5(function(twelve) {
      twelve.setup = function() {
        twelve.createCanvas(twelve.windowWidth, twelve.windowHeight);
        twelve.frameRate(10);
      };

      twelve.draw = function() {
        twelve.background(0, 30);
        twelve.noFill();
        twelve.noise1 = twelve.noise(.01 * twelve.frameCount) * twelve.width / 2;
        twelve.noise2 = twelve.noise(.02 * twelve.frameCount) * twelve.width / 2;
        twelve.noise3 = twelve.noise(.03 * twelve.frameCount) * twelve.width / 2;
        twelve.noise4 = twelve.noise(.04 * twelve.frameCount) * twelve.height / 2;
        twelve.translate(twelve.width / 2, twelve.height / 2);
        twelve.stroke(0, twelve.noise1, twelve.noise2);

        for (twelve.x = 0; twelve.x <= twelve.width; twelve.x += 100) {
          for (twelve.y = 0; twelve.y <= twelve.height / 2; twelve.y += 100) {
            twelve.ellipse(twelve.noise1, twelve.noise2, twelve.x, twelve.y);
            twelve.rotate(twelve.noise1);
            twelve.shearX(twelve.noise1 / 10);
          }
        }

        twelve.stroke(twelve.noise3, 0, twelve.noise4);
        for (twelve.x = 0; twelve.x <= twelve.width; twelve.x += 100) {
          for (twelve.y = 0; twelve.y <= twelve.height; twelve.y += 100) {
            twelve.ellipse(twelve.noise3, twelve.noise4, twelve.x, twelve.y);
            twelve.rotate(twelve.noise3);
            twelve.shearX(twelve.noise3 / 10);
          }
        }
      };
      // twelve.mousePressed = function() {
      //   if (twelve.mouseX < twelve.width && twelve.mouseY < twelve.height) {
      //     twelve.resizeCanvas(twelve.windowWidth, twelve.windowHeight);
      //   }
      // }
      // twelve.mouseReleased = function() {
      //   twelve.resizeCanvas(200, 200);
      // }
    }, "sketch12");

  } else if (key === 'c') {
    //fourteen = line6 but not line copy 4 copy 10-BETTER THAN 9
    new p5(function(fourteen) {
      fourteen.setup = function() {
        fourteen.createCanvas(fourteen.windowWidth, fourteen.windowHeight);
        fourteen.frameRate(30);
      };

      fourteen.draw = function() {
        fourteen.background(0, 30);
        fourteen.noFill();

        fourteen.noise1 = fourteen.noise(.01 * fourteen.frameCount) * fourteen.width;
        fourteen.noise2 = fourteen.noise(.02 * fourteen.frameCount) * fourteen.height;
        fourteen.noise3 = fourteen.noise(.03 * fourteen.frameCount) * fourteen.width;
        fourteen.noise4 = fourteen.noise(.04 * fourteen.frameCount) * fourteen.height;
        fourteen.noise5 = fourteen.noise(.05 * fourteen.frameCount) * fourteen.width;
        fourteen.noise6 = fourteen.noise(.06 * fourteen.frameCount) * fourteen.height;
        fourteen.noise7 = fourteen.noise(.07 * fourteen.frameCount) * fourteen.width;
        fourteen.noise8 = fourteen.noise(.08 * fourteen.frameCount) * fourteen.height;

        fourteen.noise11 = fourteen.noise(.01 * fourteen.frameCount) * fourteen.height;
        fourteen.noise12 = fourteen.noise(.02 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise13 = fourteen.noise(.03 * fourteen.frameCount) * fourteen.height;
        fourteen.noise14 = fourteen.noise(.04 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise15 = fourteen.noise(.05 * fourteen.frameCount) * fourteen.height;
        fourteen.noise16 = fourteen.noise(.06 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise17 = fourteen.noise(.07 * fourteen.frameCount) * fourteen.height;
        fourteen.noise18 = fourteen.noise(.08 * fourteen.frameCount) * fourteen.width / 2;

        fourteen.noise21 = fourteen.noise(.01 * fourteen.frameCount) * fourteen.height / 2;
        fourteen.noise22 = fourteen.noise(.02 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise23 = fourteen.noise(.03 * fourteen.frameCount) * fourteen.height / 2;
        fourteen.noise24 = fourteen.noise(.04 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise25 = fourteen.noise(.05 * fourteen.frameCount) * fourteen.height / 2;
        fourteen.noise26 = fourteen.noise(.06 * fourteen.frameCount) * fourteen.width / 2;
        fourteen.noise27 = fourteen.noise(.07 * fourteen.frameCount) * fourteen.height / 2;
        fourteen.noise28 = fourteen.noise(.08 * fourteen.frameCount) * fourteen.width / 2;

        fourteen.stroke(0, fourteen.noise1, fourteen.noise2);

        fourteen.bezier(fourteen.noise1, fourteen.noise2, fourteen.noise3, fourteen.noise4, fourteen.noise5, fourteen.noise6, fourteen.noise7, fourteen.noise8);
        fourteen.bezier(fourteen.noise3, fourteen.noise4, fourteen.noise1, fourteen.noise2, fourteen.noise7, fourteen.noise8, fourteen.noise5, fourteen.noise6);
        fourteen.bezier(fourteen.noise11 - 100, fourteen.noise12 - 100, fourteen.noise13 - 100, fourteen.noise14 - 100, fourteen.noise15 - 100, fourteen.noise16 - 100, fourteen.noise17 - 100, fourteen.noise18 - 100);
        fourteen.bezier(fourteen.noise13 - 100, fourteen.noise14 - 100, fourteen.noise11 - 100, fourteen.noise12 - 100, fourteen.noise17 - 100, fourteen.noise18 - 100, fourteen.noise15 - 100, fourteen.noise16 - 100);
        fourteen.bezier(fourteen.noise21, fourteen.noise22, fourteen.noise23, fourteen.noise24, fourteen.noise25, fourteen.noise26, fourteen.noise27, fourteen.noise28);
        fourteen.bezier(fourteen.noise23, fourteen.noise24, fourteen.noise21, fourteen.noise22, fourteen.noise27, fourteen.noise28, fourteen.noise25, fourteen.noise26);

        fourteen.shearX(fourteen.noise1);
        fourteen.shearY(fourteen.noise11);
        fourteen.stroke(fourteen.noise11, 0, fourteen.noise12);

        fourteen.bezier(fourteen.noise1, fourteen.noise2, fourteen.noise3, fourteen.noise4, fourteen.noise5, fourteen.noise6, fourteen.noise7, fourteen.noise8);
        fourteen.bezier(fourteen.noise3, fourteen.noise4, fourteen.noise1, fourteen.noise2, fourteen.noise7, fourteen.noise8, fourteen.noise5, fourteen.noise6);
        fourteen.bezier(fourteen.noise11, fourteen.noise12, fourteen.noise13, fourteen.noise14, fourteen.noise15, fourteen.noise16, fourteen.noise17, fourteen.noise18);
        fourteen.bezier(fourteen.noise13, fourteen.noise14, fourteen.noise11, fourteen.noise12, fourteen.noise17, fourteen.noise18, fourteen.noise15, fourteen.noise16);
        fourteen.bezier(fourteen.noise21, fourteen.noise22, fourteen.noise23, fourteen.noise24, fourteen.noise25, fourteen.noise26, fourteen.noise27, fourteen.noise28);
        fourteen.bezier(fourteen.noise23, fourteen.noise24, fourteen.noise21, fourteen.noise22, fourteen.noise27, fourteen.noise28, fourteen.noise25, fourteen.noise26);

        fourteen.shearX(fourteen.noise4);
        fourteen.shearY(fourteen.noise14);
        fourteen.stroke(fourteen.noise14, fourteen.noise16, 0);

        fourteen.bezier(fourteen.noise1, fourteen.noise2, fourteen.noise3, fourteen.noise4, fourteen.noise5, fourteen.noise6, fourteen.noise7, fourteen.noise8);
        fourteen.bezier(fourteen.noise3, fourteen.noise4, fourteen.noise1, fourteen.noise2, fourteen.noise7, fourteen.noise8, fourteen.noise5, fourteen.noise6);
        fourteen.bezier(fourteen.noise11, fourteen.noise12, fourteen.noise13, fourteen.noise14, fourteen.noise15, fourteen.noise16, fourteen.noise17, fourteen.noise18);
        fourteen.bezier(fourteen.noise13, fourteen.noise14, fourteen.noise11, fourteen.noise12, fourteen.noise17, fourteen.noise18, fourteen.noise15, fourteen.noise16);
        fourteen.bezier(fourteen.noise21, fourteen.noise22, fourteen.noise23, fourteen.noise24, fourteen.noise25, fourteen.noise26, fourteen.noise27, fourteen.noise28);
        fourteen.bezier(fourteen.noise23, fourteen.noise24, fourteen.noise21, fourteen.noise22, fourteen.noise27, fourteen.noise28, fourteen.noise25, fourteen.noise26);

      };
      // fourteen.mousePressed = function() {
      //   if (fourteen.mouseX < fourteen.width && fourteen.mouseY < fourteen.height) {
      //     fourteen.resizeCanvas(fourteen.windowWidth, fourteen.windowHeight);
      //   }
      // }
      // fourteen.mouseReleased = function() {
      //   fourteen.resizeCanvas(200, 200);
      // }
    }, "sketch14");
  } else if (key === 'v') {
    //fifteen = line7 but not
    new p5(function(fifteen) {
      fifteen.setup = function() {
        fifteen.createCanvas(fifteen.windowWidth, fifteen.windowHeight);
        fifteen.frameRate(30);
      };

      fifteen.draw = function() {
        fifteen.background(0, 30);

        fifteen.noise1 = fifteen.noise(.01 * fifteen.frameCount) * fifteen.width;
        fifteen.noise2 = fifteen.noise(.02 * fifteen.frameCount) * fifteen.height;
        fifteen.noise3 = fifteen.noise(.03 * fifteen.frameCount) * fifteen.width;
        fifteen.noise4 = fifteen.noise(.04 * fifteen.frameCount) * fifteen.height;
        fifteen.noise5 = fifteen.noise(.05 * fifteen.frameCount) * fifteen.width;
        fifteen.noise6 = fifteen.noise(.06 * fifteen.frameCount) * fifteen.height;
        fifteen.noise7 = fifteen.noise(.07 * fifteen.frameCount) * fifteen.width;
        fifteen.noise8 = fifteen.noise(.08 * fifteen.frameCount) * fifteen.height;

        fifteen.noise11 = fifteen.noise(.05 * fifteen.frameCount) * fifteen.height;
        fifteen.noise12 = fifteen.noise(.06 * fifteen.frameCount) * fifteen.width;
        fifteen.noise13 = fifteen.noise(.07 * fifteen.frameCount) * fifteen.height;
        fifteen.noise14 = fifteen.noise(.08 * fifteen.frameCount) * fifteen.width;
        fifteen.noise15 = fifteen.noise(.035 * fifteen.frameCount) * fifteen.height;
        fifteen.noise16 = fifteen.noise(.045 * fifteen.frameCount) * fifteen.width;
        fifteen.noise17 = fifteen.noise(.055 * fifteen.frameCount) * fifteen.height;
        fifteen.noise18 = fifteen.noise(.062 * fifteen.frameCount) * fifteen.width;

        fifteen.noise21 = fifteen.noise(.021 * fifteen.frameCount) * fifteen.height;
        fifteen.noise22 = fifteen.noise(.023 * fifteen.frameCount) * fifteen.width;
        fifteen.noise23 = fifteen.noise(.025 * fifteen.frameCount) * fifteen.height;
        fifteen.noise24 = fifteen.noise(.027 * fifteen.frameCount) * fifteen.width;
        fifteen.noise25 = fifteen.noise(.028 * fifteen.frameCount) * fifteen.height;
        fifteen.noise26 = fifteen.noise(.030 * fifteen.frameCount) * fifteen.width;
        fifteen.noise27 = fifteen.noise(.032 * fifteen.frameCount) * fifteen.height;
        fifteen.noise28 = fifteen.noise(.035 * fifteen.frameCount) * fifteen.width;


        fifteen.beginShape();
        fifteen.stroke(0, fifteen.noise1, fifteen.noise2);
        fifteen.fill(0, fifteen.noise1, fifteen.noise2, 40);

        fifteen.vertex(fifteen.noise1, fifteen.noise2);
        fifteen.vertex(fifteen.noise2, fifteen.noise3);
        fifteen.vertex(fifteen.noise3, fifteen.noise4);
        fifteen.vertex(fifteen.noise4, fifteen.noise5);
        fifteen.vertex(fifteen.noise6, fifteen.noise7);
        fifteen.vertex(fifteen.noise7, fifteen.noise8);
        fifteen.vertex(fifteen.noise8, fifteen.noise1);

        fifteen.endShape();
        fifteen.shearX(fifteen.noise1);
        fifteen.shearY(fifteen.noise11);

        fifteen.stroke(fifteen.noise11, 0, fifteen.noise12);
        fifteen.fill(fifteen.noise11, 0, fifteen.noise12, 40);
        fifteen.beginShape();
        fifteen.vertex(fifteen.noise11, fifteen.noise12);
        fifteen.vertex(fifteen.noise12, fifteen.noise13);
        fifteen.vertex(fifteen.noise13, fifteen.noise14);
        fifteen.vertex(fifteen.noise14, fifteen.noise15);
        fifteen.vertex(fifteen.noise16, fifteen.noise17);
        fifteen.vertex(fifteen.noise17, fifteen.noise18);
        fifteen.vertex(fifteen.noise18, fifteen.noise11);
        fifteen.endShape();
        fifteen.shearX(fifteen.noise4);
        fifteen.shearY(fifteen.noise14);

        fifteen.stroke(fifteen.noise24, fifteen.noise13, 0);
        fifteen.fill(fifteen.noise24, fifteen.noise13, 0, 40);
        fifteen.beginShape();
        fifteen.vertex(fifteen.noise24, fifteen.noise23);
        fifteen.vertex(fifteen.noise23, fifteen.noise22);
        fifteen.vertex(fifteen.noise22, fifteen.noise21);
        fifteen.vertex(fifteen.noise21, fifteen.noise24);
        fifteen.vertex(fifteen.noise24, fifteen.noise25);
        fifteen.vertex(fifteen.noise26, fifteen.noise27);
        fifteen.vertex(fifteen.noise27, fifteen.noise28);
        fifteen.vertex(fifteen.noise28, fifteen.noise21);
        fifteen.endShape();


      };
      // fifteen.mousePressed = function() {
      //   if (fifteen.mouseX < fifteen.width && fifteen.mouseY < fifteen.height) {
      //     fifteen.resizeCanvas(fifteen.windowWidth, fifteen.windowHeight);
      //   }
      // }
      // fifteen.mouseReleased = function() {
      //   fifteen.resizeCanvas(200, 200);
      // }
    }, "sketch14");


  } else if (key === '1') { //multiple canvas's deleted in case I accidentally held the key for too long
    defaultCanvas1.remove();
    defaultCanvas2.remove();
    defaultCanvas3.remove();
    defaultCanvas4.remove();
    defaultCanvas5.remove();
    defaultCanvas6.remove();
    defaultCanvas7.remove();
    defaultCanvas8.remove();
    defaultCanvas9.remove();
    defaultCanvas10.remove();
    defaultCanvas11.remove();
    defaultCanvas12.remove();
    defaultCanvas13.remove();
    defaultCanvas14.remove();
    defaultCanvas15.remove();
    defaultCanvas16.remove();
    defaultCanvas17.remove();
    defaultCanvas18.remove();
    defaultCanvas19.remove();
    defaultCanvas20.remove();
    defaultCanvas21.remove();
    defaultCanvas22.remove();
    defaultCanvas23.remove();
    defaultCanvas24.remove();
    defaultCanvas25.remove();
    defaultCanvas26.remove();
    defaultCanvas27.remove();
    defaultCanvas28.remove();
    defaultCanvas29.remove();
    defaultCanvas30.remove();
    defaultCanvas31.remove();
    defaultCanvas32.remove();
    defaultCanvas33.remove();
    defaultCanvas34.remove();
    defaultCanvas35.remove();
    defaultCanvas36.remove();
    defaultCanvas37.remove();
    defaultCanvas38.remove();
    defaultCanvas39.remove();
    defaultCanvas40.remove();
    defaultCanvas41.remove();
    defaultCanvas42.remove();
    defaultCanvas43.remove();
    defaultCanvas44.remove();
    defaultCanvas45.remove();
    defaultCanvas46.remove();
    defaultCanvas47.remove();
    defaultCanvas48.remove();
    defaultCanvas49.remove();
    defaultCanvas50.remove();
    defaultCanvas51.remove();
    defaultCanvas52.remove();
    defaultCanvas53.remove();
    defaultCanvas54.remove();
    defaultCanvas55.remove();
    defaultCanvas56.remove();
    defaultCanvas57.remove();
    defaultCanvas58.remove();
    defaultCanvas59.remove();
  }

}

// }