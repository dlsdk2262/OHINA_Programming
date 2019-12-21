var diamBlue = 0;

var r = (100);
var g = (50);
var b = (70);

var rTriangle = (100);
var gTriangle = (50);
var bTriangle = (70);


function setup() {
    // put setup code here
    createCanvas(500, 500);
}

function draw() {

    background(r, g, b);
    
    fill(255, 220, 180);
    stroke(220, 160, 30);
    strokeWeight(10);
    noStroke();
    ellipse(100, 200, diamBlue, diamBlue);
    ellipse(400, 200, diamBlue, diamBlue);
    fill(250, 220, 180);
    
    
    fill(rTriangle, gTriangle, bTriangle)
    triangle(250, random(10, 250), 280, 350, 220, 350)
    stroke(220, 160, 30, 80);
    strokeWeight(4);
    ellipse(mouseX, mouseY, 20, 20);
    point(10, 400);
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    text("Ina Oh", 50, 50);
}


function mousePressed() {
    //increase the diameter of the ellipses
    if (diamBlue >= 85) {
        diamBlue = 0;
    } else {
        diamBlue = diamBlue + 10;
    }
    diamBlue = diamBlue + 10;
    
    r = random(0);
    g = random(0, 255);
    b = random(0);
    
    rTriangle = random(0, 255);  
    gTriangle = random(0);
    bTriangle = random(0);
}

