class form {
    constructor(){
      this.quotes = ["There's no substitute for hardwork."
      ,"Imagination is more important than learning.",
      "Don't worry for your results ,its safe with us.",
      "No shortcut for success"]
      this.quote = random(this.quotes) 
      
        this.login_Teacher = createButton(" LOGIN ")
        this.login_student = createButton("LOGIN")
        this.greeting = createElement("h2");  
       
  
    }
   
  
      display(){
        textSize(30);
  text(this.quote,displayWidth/2 - 50,displayHeight/2 + 100);
        this.login_student.style('font-size', '24px', 'color', 'black');
        this.login_student.style('background-color', "#C8FFFF");
        this.login_student.position(displayWidth/2 + 120,displayHeight/2 - 50) ;
  this.login_Teacher.position(displayWidth/2 - 150 ,displayHeight/2 - 50) ;
  this.login_Teacher.style('font-size', '24px', 'color', 'black');
  this.login_Teacher.style('background-color', "#C8FFFF");
    var  studIm=  image(st,displayWidth/2 + 90,displayHeight/2 - 200,165,140)
    var teach_im =     image(tr,displayWidth/2 - 160,displayHeight/2 - 200,175,150)
  
        
 

 this.login_Teacher.mousePressed( ()=>{

push();
  tint(255, 0);
  
    this.login_Teacher.hide();
    this.login_student.hide();
    tLogin = new teacherLogin();
    tLogin.display();
    // this.idValue = this.id.value();
    // this.greeting.html("Good Luck For Your Exam " );
      // this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
     
     
    })
  this.login_student.mousePressed( ()=>{
   
    // this.id.hide();
    // this.password.hide();
   
    this.login_Teacher.hide();
    this.login_student.hide();
    sLogin = new studentLogin();
    sLogin.display();
 tr.hide();
     
     
    })


  
 



    }
  }