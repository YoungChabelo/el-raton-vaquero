var fondo, fondoImg;
var gato,gatoImg,gatoC,gatoS;
var raton,ratonImg,ratonC,ratonS;

function preload() {
    //load the images here
    fondoImg = loadImage("images/garden.png");
    
    gatoImg = loadAnimation("images/cat1.png");
    gatoC = loadAnimation("images/cat2.png","images/cat3.png");
    gatoS = loadAnimation("images/cat4.png");

    ratonImg = loadAnimation("images/mouse1.png");
    ratonC = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratonS = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(970,700);
    //create tom and jerry sprites here

    fondo = createSprite(485,350);
    fondo.addImage("fondo", fondoImg);

    gato = createSprite(870,600);
    gato.addAnimation("gato", gatoImg);
    gato.addAnimation("caminando", gatoC);
    gato.addAnimation("pillando", gatoS);
    gato.scale = 0.15;

    raton = createSprite(100,600);
    raton.addAnimation("raton", ratonImg);
    raton.addAnimation("molestando",ratonC);
    raton.addAnimation("pillado",ratonS);
    raton.scale = 0.12;

}

function draw() {
    background(0);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("w")){
        raton.changeAnimation("molestando",ratonC);
        raton.frameDelay = 25;

        gato.velocityX = -5;
        gato.changeAnimation("caminando", gatoC);
        gato.frameDelay = 25;

    }

    if(raton.isTouching(gato)){
        gato.velocityX = 0;
        gato.changeAnimation("pillando", gatoS);
        raton.changeAnimation("pillado",ratonS);
        

    }

    
    raton.setCollider("rectangle",0,0,1000,1400);
    gato.setCollider("rectangle",0,0,1200,1400);
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyDown("w")){
        raton.changeAnimation("molestando",ratonC);
        raton.frameDelay = 25;

        gato.velocityX = -5;
        gato.changeAnimation("caminando", gatoC);
        gato.frameDelay = 25;

    }

}
