class studentLogin {
    constructor(){
        this.id = createInput("Email/Mobile")
        this.password = createInput("PASSWORD")
        this.name = createInput("Name")
        this.login = createButton("LOGIN")
    }

    display(){
        
        this.name.position(displayWidth/2,displayHeight/2 - 250) ;
  this.id.position(displayWidth/2,displayHeight/2 - 200) ;
  sDash.name = this.name.value();

  this.password.position(displayWidth/2,displayHeight/2 - 150) ;  
  this.login.position(displayWidth/2 + 100,displayHeight/2 - 50) ;
 console.log(this.name);
  sDash.display();
    }
}