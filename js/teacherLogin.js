//Create 3 input box of email,password,name

//create login button

// using moupress move to teacher dashboard
class teacherLogin{
constructor(){
    this.greeting = createElement("h2")
    this.greeting2 = createElement("h1")
    this.id = createInput("")
    this.password = createInput("")
    this.name = createInput("Teacher")
    this.login = createButton("LOGIN")
}

display(){
    // this.id.placeholder("Email/Mobile")
// this.password.placeholder("PASSWORD")

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
test.style('font-size', '24px', 'color', 'Green')
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
//   var s1 = createButton('Submit')
//    s1.position(displayWidth / 2 - 70, displayHeight / 4 + 200);
   sel.style('font-size', '24px');
    sel.position(displayWidth / 2 - 70, displayHeight / 4 - 150);
    sel.option('Question Type',0);
    sel.option('MCQ',1);
    sel.option("ONE WORD",2)
    sel.option("INTEGER TYPE",3)
    sel.option('DETAIL',4);
    sel.changed(mySelectEvent);

    function mySelectEvent() {
        var item = sel.value();
        if(item == 1){
         var q1 =  createInput('Type your question here.')
         q1.style("font-size",'30px')
          q1.position(displayWidth/2,displayHeight/2 - 220)
var op1 = createInput('Option A')
op1.position(displayWidth/2,displayHeight/2 - 170)
op1.style("font-size",'24px')
var op2 = createInput('Option B')
op2.position(displayWidth/2,displayHeight/2 - 140)
op2.style("font-size",'24px')
var op3 = createInput('Option C')
op3.position(displayWidth/2,displayHeight/2 - 110)
op3.style("font-size",'24px')
var op4 = createInput('Option D')
op4.position(displayWidth/2,displayHeight/2 - 80)
op4.style("font-size",'24px')
        }
        var st = createButton('Next question')
st.style("font-size",'24px')
st.position(displayWidth/2 + 50,displayHeight/2 - 40)
var st1 = createButton('Submit')
st1.position(displayWidth/2 + 50,displayHeight/2 )
st1.style("font-size",'24px')
st.mousePressed(()=>{
      q1.value('Type your question here.')  
      op1.value('Option A')    
      op2.value('Option B')   
      op3.value('Option C')     
      op4.value('Option D')    
})
    }  
    
})
})
}
}