
let t= 0;
let t2= 0;
let t3= 0;
let t4= 0;
let t5= 0;
let t6= 0;
let t7= 0;


let fall=0;


function setup() {
  createCanvas(700, 700);
  background(255, 239, 194);
  textSize(23);
  noStroke();
}


function draw() {



  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(255, 239, 194);
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

