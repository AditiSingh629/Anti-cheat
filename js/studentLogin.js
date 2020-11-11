

class studentLogin {
    constructor(){
        this.greeting = createElement("h2")
        this.id2 = createInput("Email/Mobile")
        this.password2 = createInput("PASSWORD")
        this.name2 = createInput("Student")
        this.login2 = createButton("LOGIN")
    }

    display(){
        
        this.id2.style('font-size', '24px', 'color', '#ffffff');
        this.id2.style('background-color', "#FFF5EE");
        this.name2.style('font-size', '24px', 'color', '#ffffff');
        this.name2.style('background-color', "#FFF5EE");
        this.login2.style('font-size', '24px', 'color', '#ffffff');
        this.password2.style('font-size', '24px', 'color', '#ffffff')
        this.password2.style('background-color', "#FFF5EE");;
        this.name2.position(displayWidth/2,displayHeight/2 - 175) ;

        this.name2.position(displayWidth/2,displayHeight/2 - 175) ;
  this.id2.position(displayWidth/2,displayHeight/2 - 125) ;
 
  this.password2.position(displayWidth/2,displayHeight/2 - 75) ;  
  this.login2.position(displayWidth/2 + 100,displayHeight/2 ) ;


this.login2.mousePressed( ()=>{
    
    this.id2.hide();
        this.password2.hide();
        this.name2.hide();
        this.login2.hide();
        var studName = this.name2.value();
        console.log(studName);
        
            this.greeting.html("Good Luck For Your Exam " + studName);
                  this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
        
    })
 
    }
   
}