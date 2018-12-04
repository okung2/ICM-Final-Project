function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  background(0, 30);
  var noise1 = noise(.01 * frameCount) * width;
  var noise2 = noise(.02 * frameCount) * height;
  var noise3 = noise(.03 * frameCount) * width;
  var noise4 = noise(.04 * frameCount) * height;
  var noise5 = noise(.05 * frameCount) * width;
  var noise6 = noise(.06 * frameCount) * height;
  var noise7 = noise(.07 * frameCount) * width;
  var noise8 = noise(.08 * frameCount) * height;


  var noise11 = noise(.05 * frameCount) * height;
  var noise12 = noise(.06 * frameCount) * width;
  var noise13 = noise(.07 * frameCount) * height;
  var noise14 = noise(.08 * frameCount) * width;
  var noise15 = noise(.035 * frameCount) * width;
  var noise16 = noise(.045 * frameCount) * height;
  var noise17 = noise(.055 * frameCount) * width;
  var noise18 = noise(.062 * frameCount) * height;

  var noise21 = noise(.09 * frameCount) * height / 2;
  var noise22 = noise(.02 * frameCount) * width / 2;
  var noise23 = noise(.08 * frameCount) * height / 2;
  var noise24 = noise(.04 * frameCount) * width / 2;
  var noise25 = noise(.025 * frameCount) * width;
  var noise26 = noise(.058 * frameCount) * height;
  var noise27 = noise(.013 * frameCount) * width;
  var noise28 = noise(.032 * frameCount) * height;

  beginShape();
  stroke(0, noise1, noise2);
  fill(0, noise1, noise2, 40);

  vertex(noise1, noise2);
  vertex(noise2, noise3);
  vertex(noise3, noise4);
  vertex(noise4, noise5);
  vertex(noise6, noise7);
  vertex(noise7, noise8);
  vertex(noise8, noise1);

  endShape();
  shearX(noise1);
  shearY(noise11);

  stroke(noise11, 0, noise12);
  fill(noise11, 0, noise12, 40);
  beginShape();
  vertex(noise11, noise12);
  vertex(noise12, noise13);
  vertex(noise13, noise14);
  vertex(noise14, noise15);
  vertex(noise16, noise17);
  vertex(noise17, noise18);
  vertex(noise18, noise11);
  endShape();
  shearX(noise4);
  shearY(noise14);

  stroke(noise24, noise13, 0);
  fill(noise24, noise13, 0, 40);
  beginShape();
  vertex(noise24, noise23);
  vertex(noise23, noise22);
  vertex(noise22, noise21);
  vertex(noise21, noise24);
  vertex(noise24, noise25);
  vertex(noise26, noise27);
  vertex(noise27, noise28);
  vertex(noise28, noise21);
  endShape();

}