class form {
    constructor(){
      
      quotes = ["There's no substitute for hardwork."
,"Imagination is more important than learning.",
"The secret to getting ahead is getting started.",
"You can win if you want.",
"I had rather be honest than impressive.",
"No shortcut for success.",
"Don't stress,do your best and forget the rest.",
"Exams test your memory,life tests your learning,others will test your patience.",
"Believe you can and you are halfway there."]
quote = random(quotes)
        this.login_Teacher = createButton(" LOGIN ")
        this.login_student = createButton("LOGIN")
        this.greeting = createElement("h2");  
       
  
    }
   
  
      display(){
        textSize(30);
        
        var q1 = createElement('h9')
        q1.style('font-size','20px')
        q1.style('width','100px')
        q1.html(quote)
        q1.position(displayWidth/4 - 260,displayHeight/2 - 300)
        this.login_student.style('font-size', '24px', 'color', 'black');
        this.login_student.style('background-color', "#C8FFFF");
        this.login_student.position(displayWidth/2 + 120,displayHeight/2 - 50) ;
  this.login_Teacher.position(displayWidth/2 - 150 ,displayHeight/2 - 50) ;
  this.login_Teacher.style('font-size', '24px', 'color', 'black');
  this.login_Teacher.style('background-color', "#C8FFFF");
   
  
        
 

 this.login_Teacher.mousePressed( ()=>{
// text.remove();
// push();
//   tint(255, 0);
  // pop()
  tr1.visible = false;
  st1.visible = false;
q1.hide()
    this.login_Teacher.remove();
    this.login_student.hide();

    // te1.visible = true;
    tLogin = new teacherLogin();
    tLogin.display();
    
     
    })
  this.login_student.mousePressed( ()=>{
    
    // this.id.hide();
    // this.password.hide();
  
    tr1.visible = false;
    st1.visible = false;
q1.hide()
    this.login_Teacher.hide();
    this.login_student.hide();
    q1.hide();
    sLogin = new studentLogin();
    sLogin.display();
    })


  
 



    }
  }