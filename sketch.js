var radius = 100;
var x = 250;
var y = 250;
var dir = 1;
var step = 5;

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);
    noStroke();

    if (dir == 1) { // going right
        x += step;
        if (x == width - radius) dir = -2;
    } else if (dir == -1) { // going left
        x -= step;
        if (x == radius) dir = 2;
    } else if (dir == 2) { // going up
        y -= step;
        if (y == radius) dir = 1;
    } else { // going down
        y += step;
        if (y == height - radius) dir = -1;
    }


    // if (dir == 1) { // enlarge
    //     radius += step;
    //     if (radius == width / 2) dir = -1;
    // } else {
    //     radius -= step;
    //     if (radius == 20) dir = 1;
    // }



    // if (x + step < mouseX || x - step > mouseX || y + step < mouseY || y - step > mouseY) {
    //     if (x < mouseX && x < width - radius) x += step;
    //     else if (x > mouseX && x > radius) x -= step;
    //     if (y < mouseY && y < width - radius) y += step;
    //     else if (y > mouseY && y > radius) y -= step;
    // }



    fill(237, 34, 93);
    ellipse(x, y, radius * 2, radius * 2);

    fill(255);
    rect(x, y, radius, radius / 5);
}



// function setup() { 
//   createCanvas(800, 400);
// } 

// function draw() { 
//   background(220);
//   fill(51, 51, 51);
//   strokeWeight(2);
//   stroke(75);
//   ellipse(400, 200, 300, 300);
//   stroke(0);
//   fill(255, 53, 139);
//   ellipse(400, 200, 275, 275);
//   fill(1, 176, 240);
//   ellipse(400, 200, 250, 250);
//   fill(174, 238, 0);
//   ellipse(400, 200, 150, 150);
// }





// function setup() {
//     createCanvas(640, 480);
// }

// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }