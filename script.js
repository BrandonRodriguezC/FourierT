let time = 0;
let wave = [];
let slider;

function setup() {
 createCanvas(700, 400);
 // slider = createSlider(1, 10, 5);
}

function draw() {
  background(0);
  translate(150, 200);

  let x = 0;
  let y = 0;

  for (let i = 0; i < 5 ; i++) {
    let prevx = x;
    let prevy = y;
    
    let n = i * 2 + 1;
    let radio = 75 * (4 / (n * PI));
    x += radio * cos(n * time);
    y += radio * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radio * 2);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x, y, 8);
  }
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 250) {
    wave.pop();
  }
}