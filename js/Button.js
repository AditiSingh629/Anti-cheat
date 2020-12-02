
class Button {
constructor(){
  
 this.he1 = createElement("H1")
 this.he2 = createElement("h3")
 this.he3 = createElement("h3")
 this.he4 = createElement("h3")
 this.he5 = createElement("h3")
 this.he6 = createElement("h3")
 this.he7 = createElement("h3")
 this.he8 = createElement("h3")
 this.he9 = createElement("h3")
 this.start = createButton('START TEST')
//  this.greeting = createElement('H7')
}

display(){
this.he1.html("INSTRUCTIONS")
this.he2.html("1.Exit full screen or Going to any other tab strictly prohibited.")
this.he3.html("2.Notification and calls will be blocked by the system")
this.he4.html("3.Once Turned On ,Camera cannot be turned Off.")
this.he5.html('4.Do ensure proper charing of device,if screen goes off test gets submitted')
this.he6.html('5.The Exam Conductor can only see all the videos and could particularly call in a student.')
this.he7.html("6.Examinee only see their videos and the Exam Conductor's.")
this.he8.html("7.Examiner may unmute the students without their knowledge,")
this.he9.html("but voice only audible to the invigilator.")
this.he1.position(displayWidth/2,displayHeight/2 - 320)
this.he2.position(displayWidth/2- 150 ,displayHeight/2 - 220)
this.he3.position(displayWidth/2- 150 ,displayHeight/2 - 170)
this.he4.position(displayWidth/2- 150,displayHeight/2 - 120)
this.he5.position(displayWidth/2- 150,displayHeight/2 - 70)
this.he6.position(displayWidth/2- 150,displayHeight/2 - 20)
this.he7.position(displayWidth/2- 150,displayHeight/2 + 30)
this.he8.position(displayWidth/2- 150,displayHeight/2 + 80)
this.he9.position(displayWidth/2- 150,displayHeight/2 + 110)
this.start.style("font-size",'25px')
this.start.position(displayWidth/2,displayHeight/2 + 220)



this.start.mousePressed(()=>{
  cam.visible = true;
 
  var fs = fullscreen(); 
      
  // Call to fullscreen function 
  fullscreen(!fs);

  var qu1  = new Quest();
  qu1.display()
this.start.hide();  
this.he1.hide();
  this.he2.hide();
  this.he3.hide();
  this.he4.hide();
  this.he5.hide();
  this.he6.hide();
  this.he7.hide();
  this.he8.hide();
  this.he9.hide();
  // tim();
//  this.timer = 120;
//   if (frameCount % 30 == 0 && this.timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
//     this.timer--;
//   }
//   if (this.timer == 0) {
//     text("TIME OVER", width/2, height*0.7);
//   }
//   textSize(100)
//   text(this.timer,200,200)

})

}}
