
function preload() {
    //load the images here
    bgimg=loadImage("images/garden.png")
    cat1img=loadAnimation("images/cat1.png")
    cat2img=loadAnimation("images/cat2.png","images/cat3.png")
    cat3img=loadAnimation("images/cat4.png")
   mouse1img=loadAnimation("images/mouse1.png")
   mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png")
   mouse3img=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("tomsleep",cat1img)
cat.scale=0.2
mouse=createSprite(200,600)
mouse.addAnimation("mousestand",mouse1img)
mouse.scale=0.15
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0
cat.addAnimation("catlast",cat3img)
cat.x=300
cat.scale=0.2
cat.changeAnimation("catlast")
mouse.addAnimation("mouselast",mouse3img)
mouse.scae=0.15
mouse.changeAnimation("mouselast")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catrun",cat2img)
    cat.changeAnimation("catrun")
    mouse.addAnimation("mousetease",mouse2img)
    mouse.changeAnimation("mousetease")
}

}
