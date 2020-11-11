//Create 3 input box of email,password,name

//create login button

// using moupress move to teacher dashboard
class teacherLogin{
constructor(){
    this.greeting = createElement("h2")
    this.greeting2 = createElement("h1")
    this.id = createInput("Email/Mobile")
    this.password = createInput("PASSWORD")
    this.name = createInput("Teacher")
    this.login = createButton("LOGIN")
}

display(){
    this.id.style('font-size', '24px', 'color', '#ffffff');
    this.id.style('background-color', "#FFF5EE");
    this.name.style('font-size', '24px', 'color', '#ffffff');
    this.name.style('background-color', "#FFF5EE");
    this.login.style('font-size', '24px', 'color', '#ffffff');
    this.password.style('font-size', '24px', 'color', '#ffffff')
    this.password.style('background-color', "#FFF5EE");;
    this.name.position(displayWidth/2,displayHeight/2 - 175) ;
this.id.position(displayWidth/2,displayHeight/2 - 125) ;

this.password.position(displayWidth/2,displayHeight/2 - 75) ;  
this.login.position(displayWidth/2 + 100,displayHeight/2 ) ;

this.login.mousePressed( ()=>{
    var test = createButton("CREATE TEST")
    test.position(displayWidth / 2 - 70, displayHeight / 4 + 200)
this.id.hide();
    this.password.hide();
    this.name.hide();
    this.login.hide();
    var teachName = this.name.value();
    console.log(teachName);
    
        this.greeting.html("Hello " + teachName + " Mam");
        this.greeting2.html("CLICK ON CREATE TEST TO PREPARE TEST PAPER");
              this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
              this.greeting2.position(displayWidth / 2 - 70, displayHeight / 4 + 50 ); 

test.mousePressed(()=>{
    this.greeting.hide();
    this.greeting2.hide();
    test.hide();
    textAlign(CENTER);
    background(200);
   var sel = createSelect();
    sel.position(displayWidth / 2 - 70, displayHeight / 4 + 50);
    sel.option('TEST');
    sel.option('MCQ');
    sel.option("ONE WORD")
    // sel.changed(mySelectEvent);
    if(sel.option === "MCQ"){
        text('Chpsi',100,100)
    }
})
})
}
}