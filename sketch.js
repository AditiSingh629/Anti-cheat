var sDash,sLogin,stud,tLogin,tr,st,tr1,st1,te1
var quote,quotes,cam1,cam2,il
var CV1 = 1;
var CV2 = 2;
var Cval = CV1;


function preload(){
  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;

    cr = loadImage("image/inv.png")
    st = loadImage("image/stud1.png")
    tr = loadImage("image/teach1.png")
    ca1 = loadAnimation("image/c1.png")
    ca2 = loadAnimation("image/c2.png")
    am1 = loadAnimation('animation/a1.png','animation/a1.png','animation/a2.png')
   stud = loadAnimation('animation/st/stud.png','animation/st/stud1.png','animation/st/stud2.png',
   'animation/st/stud3.png','animation/st/stud4.png','animation/st/stud5.png',
   'animation/st/stud6.png','animation/st/stud7.png','animation/st/stud8.png',
   'animation/st/stud10.png','animation/st/stud11.png','animation/st/stud12.png')
}
function setup(){
  // frameRate(10);
createCanvas(displayWidth - 20, displayHeight - 30);
il = createSprite(displayWidth/2 + 10,displayHeight/2 - 280,200,150);
il.addImage('cr',cr);
il.scale = 0.5;
f1 = new form();
fill("blue");

tr1 = createSprite(displayWidth/2 - 80,displayHeight/2 - 120)
st1= createSprite(displayWidth/2 + 170,displayHeight/2 - 120)
tr1.addImage('teach',tr);
st1.addImage('stud',st);
st1.scale = 0.6;
tr1.scale = 0.7;

// cam.mouseClicked(video)

}



function draw(){
background(rgb(142, 237, 200))

f1.display();
// console.log(mouseY)
// if(Cval == 1 ){

  // elseIf()
 

// }

// else{}
// if(mousePressedOver(cam) ) {
  
  
//         // capture.hide();
// }
// if(mousePressedOver(cam) && Cval == CV2) {
// cam.changeAnimation("ca1",ca1);
// Cval =CV1;
// // capture.hide();
// }

// console.log(Cval)
drawSprites();
}
function video(){

}

function video2(){
 
  // var  capture = createCapture(VIDEO);
  // capture.size(320, 240);
  //       image(capture,displayWidth / 2 - 70, displayHeight / 2 - 100 );
}