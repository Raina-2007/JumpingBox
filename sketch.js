var canvas;
var box , block1 , block2 , block3 , block4;
var music ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces

    block1 = createSprite(700, 580, 200, 50);
    block1.shapeColor = "green";
    block2 = createSprite(500, 580, 200, 50);
    block2.shapeColor = "blue";
    block3 = createSprite(300, 580, 200, 50);
    block3.shapeColor = "yellow";
    block4 = createSprite(100, 580, 200, 50);
    block4.shapeColor = "red";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,20,20)
    box.shapeColor = "white";
    box.velocityX = -3;
    box.velocityY = 3;

}

function draw() {
    background("orange");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1)){
        box.bounceOff(block1);
        box.shapeColor = "green";
        music.play();
    }
    if(box.isTouching(block2)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.isTouching(block3)){
        box.bounceOff(block3);
        box.shapeColor = "yellow";
        music.play();
    }
    if(box.isTouching(block4)){
        box.bounceOff(block4);
        box.shapeColor = "red";
        music.play();
    }

    drawSprites();
}
