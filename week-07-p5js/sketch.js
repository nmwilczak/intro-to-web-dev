
let t= 0;
let t2= 0;
let t3= 0;
let t4= 0;
let t5= 0;
let t6= 0;
let t7= 0;

let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;


let fall=0;


function setup() {
  createCanvas(700, 700);
  background(255, 239, 194);
  textSize(23);
  noStroke();




  let radius = min(width, height) / 4;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}


function draw() {





  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(255, 239, 194);

    drawTarget(width * 0.25, height * 0.4, 200, 4);
  drawTarget(width * 0.5, height * 0.5, 300, 10);
  drawTarget(width * 0.75, height * 0.3, 120, 6);



     noStroke();
  fill(209, 209, 209);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(255, 168, 130);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();





  fill(209, 209, 209);
  ellipse(x, height/2, y, y);
  fill(255, 203, 161);
  ellipse(ix, height/2, iy, iy);


  if (mouseX < 100) {
    fill(255, 203, 161);
    rect(0, 0, 100, 700);

     // Left
  }
  else if (mouseX < 200) {
    fill(255, 239, 194);
    rect(100, 0, 100, 700); // Middle
  }
  else if (mouseX < 300) {
    fill(255, 203, 161);
    rect(200, 0, 100, 700); // Middle
  }
  else if (mouseX < 400) {
    fill(255, 239, 194);
    rect(300, 0, 100, 700); // Middle
  }
  else if (mouseX < 500) {
    fill(255, 203, 161);
    rect(400, 0, 100, 700); // Middle
  }
   else if (mouseX < 600) {
    fill(255, 239, 194);
    rect(500, 0, 100, 700); // Middle
  }
  else {
    fill(255, 203, 161);
    rect(600, 0, 100, 700); // Right
  }


//im
  fill(0, t);
  text('IM', 40, 350);
  

  if(mouseX < 100 && mouseX > 0 && mouseY < 700 && mouseY > 0){
    t = 255;
  }

  else{
    t = 0;
  }


//still
  fill(0, t2);
  text('STILL', 120, 350);
  

  if(mouseX < 200 && mouseX > 100 && mouseY < 700 && mouseY > 0){
    t2 = 255;
  }

  else{
    t2 = 0;
  }


//here
  fill(0, t3);
  text('HERE', 220, 350);
  

  if(mouseX < 300 && mouseX > 200 && mouseY < 700 && mouseY > 0){
    t3 = 255;
  }

  else{
    t3 = 0;
  }


//its
  fill(0, t4);
  text('ITS', 325, 350);
  

  if(mouseX < 400 && mouseX > 300 && mouseY < 700 && mouseY > 0){
    t4 = 255;
  }

  else{
    t4 = 0;
  }


  //not
  fill(0, t5);
  text('NOT', 420, 350);
  

  if(mouseX < 500 && mouseX > 400 && mouseY < 700 && mouseY > 0){
    t5 = 255;
  }

  else{
    t5 = 0;
  }

  //the
  fill(0, t6);
  text('THE', 520, 350);
  

  if(mouseX < 600 && mouseX > 500 && mouseY < 700 && mouseY > 0){
    t6 = 255;
  }

  else{
    t6 = 0;
  }


  //end
  fill(0, t7);
  text('END', 620, 350);
  

  if(mouseX < 700 && mouseX > 600 && mouseY < 700 && mouseY > 0){
    t7 = 255;
  }

  else{
    t7 = 0;
  }





}





function drawTarget(xloc, yloc, size, num) {
  const color = 100 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * color);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}

