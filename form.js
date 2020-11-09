class form {
    constructor(){

        ;
        this.login_Teacher = createButton("TEACHERLOGIN ")
        this.login_student = createButton("STUDENT LOGIN")
        this.greeting = createElement("h2");  
        // this.radio = createRadio();
// this.radio.option('Teacher',1);
// this.radio.option('Student',2);
// this.radio.position(displayWidth/2,displayHeight/2 -50);
  textAlign(CENTER);
        
         
        this.quotes = ["There's no substitute for hardwork."
        ,"Imagination is more important than learning.",
        "Don't worry for your results ,its safe with us.",
        "No shortcut for success"]
       
        this.quote = random(this.quotes) 
      }
  
      display(){
         
  this.login_Teacher.position(displayWidth/2 ,displayHeight/2 - 100) ;
  this.login_student.position(displayWidth/2 -150 ,displayHeight/2 - 100) ;
  
  textSize(30);
  textFont('Georgia');
  text(this.quote,displayWidth/2 - 50,displayHeight/2 + 100);
 
 


  this.login_student.mousePressed( ()=>{
   
    // this.id.hide();
    // this.password.hide();
    this.login_Teacher.hide();
    this.login_student.hide();
  
    sLogin.display();
    // this.idValue = this.id.value();
    // this.greeting.html("Good Luck For Your Exam " );
      // this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
     
     
    })


  // } )


     
 


}
}