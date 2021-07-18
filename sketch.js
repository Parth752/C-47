var Sofia;

function setup() {

var Sofia = createSprite(30, 30,18,18);
Sofia.shapeColor = 'Blue';



var cardboard1 = createSprite(10, 60, 100, 20);
cardboard1.shapeColor = 'yellow';
var cardboard2 = createSprite(110, 30, 20, 150);
cardboard2.shapeColor = 'yellow';
var cardboard3 = createSprite(90, 110, 110, 20);
cardboard3.shapeColor = 'yellow';
var cardboard4 = createSprite(10, 155, 390, 20);
cardboard4.shapeColor = 'yellow';
var cardboard5 = createSprite(195, 90, 20, 120);
cardboard5.shapeColor = 'yellow';
var cardboard6 = createSprite(250, 30, 20, 300);
cardboard6.shapeColor = 'yellow';
var cardboard7 = createSprite(90, 220, 390, 20);
cardboard7.shapeColor = 'yellow';
var cardboard8 = createSprite(200, 290, 20, 120);
cardboard8.shapeColor = 'yellow';
var cardboard8 = createSprite(115, 340, 150, 20);
cardboard8.shapeColor = 'yellow';
var cardboard9 = createSprite(100, 295, 20, 70);
cardboard9.shapeColor = 'yellow';
var cardboard10 = createSprite(320, 30, 120, 20);
cardboard10.shapeColor = 'yellow';
var cardboard11 = createSprite(350, 100, 100, 20);
cardboard11.shapeColor = 'yellow';
var cardboard12 = createSprite(320, 170, 120, 20);
cardboard12.shapeColor = 'yellow';
var cardboard13 = createSprite(300, 65, 20, 90);
cardboard13.shapeColor = 'yellow';
var cardboard14 = createSprite(370, 230, 20, 100);
cardboard14.shapeColor = 'yellow';
var cardboard15 = createSprite(100, 375, 20, 50);
cardboard15.shapeColor = 'yellow';
var cardboard16 = createSprite(150, 203, 20, 25);
cardboard16.shapeColor = 'yellow';
var cardboard17 = createSprite(180, 70, 50, 20);
cardboard17.shapeColor = 'yellow';
var cardboard18 = createSprite(320, 270, 120, 20);
cardboard18.shapeColor = 'yellow';
var cardboard19 = createSprite(270, 320, 120, 20);
cardboard19.shapeColor = 'yellow';
var cardboard20 = createSprite(40, 260, 20, 90);
cardboard20.shapeColor = 'yellow';
var cardboard21 = createSprite(320, 355, 20, 90);
cardboard21.shapeColor = 'yellow';
var cardboard22 = createSprite(240, 355, 20, 90);
cardboard22.shapeColor = 'yellow';
var prizecup = createSprite(390, 375 ,10 ,40);
prizecup.shapeColor = 'red';

}

function draw() {
createEdgeSprites();

/*
Sofia.bounceOff(edges);
Sofia.velocityX=0;
Sofia.velocityY=0; */
  
  background("lime");


if (keyDown("UP_ARROW")) {
   Sofia.velocityX=0;
   Sofia.velocityY=-3;
}

if (keyDown("RIGHT_ARROW")) {
   Sofia.velocityX=3;
   Sofia.velocityY=0;
}

if (keyDown("LEFT_ARROW")) {
   Sofia.velocityX=-3;
   Sofia.velocityY=0;
}

if (keyDown("DOWN_ARROW")) {
   Sofia.velocityX=0;
   Sofia.velocityY=3;
}

 /* Sofia.bounceOff(cardboard1);
  Sofia.bounceOff(cardboard2);
  Sofia.bounceOff(cardboard3);
  Sofia.bounceOff(cardboard4);
  Sofia.bounceOff(cardboard5);
  Sofia.bounceOff(cardboard6);
  Sofia.bounceOff(cardboard7);
  Sofia.bounceOff(cardboard8);
  Sofia.bounceOff(cardboard9);
  Sofia.bounceOff(cardboard10);
  Sofia.bounceOff(cardboard11);
  Sofia.bounceOff(cardboard12);
  Sofia.bounceOff(cardboard13);
  Sofia.bounceOff(cardboard14);
  Sofia.bounceOff(cardboard15);
  Sofia.bounceOff(cardboard16);
  Sofia.bounceOff(cardboard17);
  Sofia.bounceOff(cardboard18);
  Sofia.bounceOff(cardboard19);
  Sofia.bounceOff(cardboard20);
  Sofia.bounceOff(cardboard21); */
if (Sofia.isTouching(prizecup)) {
    fill("red");
    textSize(30);
  text("YOU WIN", 160,205);
  }
Sofia.bounceOff(cardboard22);
fill("blue");
textSize(15);
  
fill("green");
textSize(15);


drawSprites();
}