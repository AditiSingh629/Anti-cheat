var sDash,sLogin;

function preload(){
    cr = loadImage("image/inv.png")
    
}
function setup(){
createCanvas(displayWidth - 20, displayHeight - 30);
f1 = new form();
 sDash = new studDashboard();
 sLogin = new studentLogin();


fill("blue");
}

function draw(){
  background(rgb(142, 237, 200))  ;
f1.display();
image(cr,displayWidth/2 - 20,displayHeight/2 - 350,200,150)

}

