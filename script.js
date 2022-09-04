function setup() {
  createCanvas(400, 400);
}

// rain location
var rainX = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110,115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350];

var rainY = [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 280, 385, 390, 395, 400];

draw = function() {
    
    background(184, 209, 214);
    fill (122, 112, 112);
    noStroke();
    
    //thunder
    var thunderX = 0;
    var thunderY = 0;

  mousePressed = function () {
        noStroke();
        fill(255, 255, 0);
        for (thunderX = 0; thunderX < 400; thunderX += 200 ) {
        triangle(thunderX + 125, thunderY + 25, thunderX + 75, thunderY + 125, thunderX + 125, thunderY + 125);
        rect(thunderX + 110, thunderY + 100, 35, 100);
        triangle(thunderX + 125, thunderY + 275, thunderX + 175, thunderY + 175, thunderX + 125, thunderY + 175);
        }
    };
    
    //umbrella
    var umbrellaX = mouseX;
    var umbrellaY = mouseY + 10;
 
    rect(umbrellaX, umbrellaY-40, 3, 30);
    fill(97, 242, 99);
    arc(umbrellaX, umbrellaY-40, 80, 80, 135, 0);
    
    //rain drops
    fill(245, 240, 245); 

    for (var rain = 0; rain < rainX.length; rain++) {
        ellipse(rainX[rain], rainY[rain] + 30, 2, 8); //rain shape
        rainY[rain] += random (0, 35); //rain speed
        
        if (rainY [rain] > 400) {
            rainY [rain] = 0; //rain restarts at the top once it reaches the bottom frame
        }
        
        if (rainX [rain] < umbrellaX + 40 && rainX [rain] > umbrellaX - 40 && rainY[rain] > umbrellaY - 110) {
            rainY [rain] = 0; //rain stops when it reaches side of umbrella
        }
    }
    
    //clouds
    var cloud = function (x) {
    ellipse (x, 30, 100, 50);
    };
    cloud(100);
    cloud(150);
    cloud(200);
    cloud(250);
    cloud(300);
     
    //instructions
    fill (0, 0, 0);
    text ("1. Move mouse to use umbrella to stop rain.", 80, 23);
    text ("2. Click on mouse to show lightning.", 80, 40);

};

//still need to fix thunder for it to show up on mousePressed
