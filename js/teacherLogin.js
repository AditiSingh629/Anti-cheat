//Create 3 input box of email,password,name

//create login button

// using moupress move to teacher dashboard
class teacherLogin{
constructor(){
    this.greeting = createElement("h2")
    this.greeting2 = createElement("h1")
    this.id = createInput("").attribute('placeholder','EMAIL/MOBILE')
    this.password = createInput("").attribute('placeholder','PASSWORD')
    this.name = createInput('').attribute('placeholder','TEACHER NAME')
    this.login = createButton("LOGIN")
    this.slider4 = createSlider(0,10,3,1);

}

display(){
   
    var te1 = createSprite(displayWidth/2 - 160,displayHeight/2 - 120,175,150)
    te1.addAnimation('am1',am1);
       te1.scale = 0.7;
    this.id.style('font-size', '24px', 'color', '#ffffff');
    this.id.style('background-color', "#FFF5EE");
    this.name.style('font-size', '24px', 'color', '#ffffff');
    this.name.style('background-color', "#FFF5EE");
    this.login.style('font-size', '24px', 'color', '#ffffff');
    this.password.style('font-size', '24px', 'color', '#ffffff')
    this.password.style('background-color', "#FFF5EE");;
    this.name.position(displayWidth/2,displayHeight/2 - 175) ;
this.id.position(displayWidth/2,displayHeight/2 - 125) ;
this.sl4 = createElement('h4');
this.password.position(displayWidth/2,displayHeight/2 - 75) ;  
this.login.position(displayWidth/2 + 100,displayHeight/2 ) ;
// if(this.password === "ADITI"){
this.login.mousePressed( ()=>{
    il.visible = false;
    te1.visible = false;
    var test = createButton("CREATE TEST")
    test.position(displayWidth / 2 - 70, displayHeight / 4 + 200)
this.id.hide();
test.style('font-size', '24px', 'color', 'Green')
    this.password.hide();
    this.name.hide();
    this.login.hide();
    var teachName = this.name.value();
    console.log(teachName);
    
        this.greeting.html("Hello " + teachName + " Mam/Sir");
        this.greeting2.html("CLICK ON CREATE TEST TO PREPARE TEST PAPER");
              this.greeting.position(displayWidth / 2 - 70, displayHeight / 6 - 100 );
              this.greeting2.position(displayWidth / 2 - 70, displayHeight / 4 + 50 ); 

test.mousePressed(()=>{
    this.greeting.hide();
    this.greeting2.hide();
    test.hide();
    textAlign(CENTER);
    background(200);
        var q1 =  createInput('').attribute('placeholder','Type your question here.')
        q1.style("font-size",'30px')
         q1.position(displayWidth/2,displayHeight/2 - 220)
         var st = createButton('Next question')
         st.style("font-size",'24px')
         st.position(displayWidth/2 + 50,displayHeight/2 - 40)
         var st1 = createButton('Submit')
         st1.position(displayWidth/2 + 50,displayHeight/2 )
         st1.style("font-size",'24px')
         st.mousePressed(()=>{
               q1.value('')  
               op1.value('')    
               op2.value('')   
               op3.value('')     
               op4.value('')    

         })
         st1.mousePressed(()=>{
            q1.hide() 
            op1.hide() 
            op2.hide() 
            op3.hide() 
            op4.hide() 
st.hide()
st1.hide()
var set = createButton("Settings")
set.position(displayWidth/2,displayHeight/2 - 220)
set.style('font-size','25px')
var set1 = createButton("Student Preview")
set1.position(displayWidth/2,displayHeight/2 - 180)
set1.style('font-size','25px')
set1.mousePressed(()=>{
    set.hide()
    set1.hide()
    var b2 = new Button();
    b2.display();
})
        set.mousePressed(()=>{
            var slider1 = createSlider(0, 50, 50,50);
            slider1.position(displayWidth/2 - 200,displayHeight/2 - 300);
            slider1.style('width', '80px')
                var sl1 = createElement('h4')
                sl1.html('CAMERA ON COMPULSORY')
                sl1.position(displayWidth/2 - 250,displayHeight/2 - 350)
                var slider2 = createSlider(0, 50, 50,50);
            slider2.position(displayWidth/2 - 200,displayHeight/2 - 250);
            slider2.style('width', '80px')
            var sl2 = createElement('h4')
            sl2.html('TEST ACTIVE')
            sl2.position(displayWidth/2 - 250,displayHeight/2 - 300)
            var slider3 = createSlider(0, 50, 0,50);
            slider3.position(displayWidth/2 - 200,displayHeight/2 - 200);
            slider3.style('width', '80px')
            var sl3 = createElement('h4')
            sl3.html('TAB SWITCH ALLOWED')
            sl3.position(displayWidth/2 - 250,displayHeight/2 - 250)
this.slider4.position(displayWidth/2 - 200,displayHeight/2 - 150);
this.slider4.style('width', '80px')
this.sl4.html('NO. OF WARNINGS')
this.sl4.position(displayWidth/2 - 250,displayHeight/2 - 200)
this.slid4 = this.slider4.value();
var slider5 = createSlider(0, 50, 50,50);
            slider5.position(displayWidth/2 - 200,displayHeight/2 - 50);
            slider5.style('width', '80px')
            var sl5 = createElement('h4')
            sl5.html('Give Quick Result')
            sl5.position(displayWidth/2 - 250,displayHeight/2 - 100)
            var slider6 = createSlider(0, 50, 50,50);
            slider6.position(displayWidth/2 - 200,displayHeight/2 + 50);
            slider6.style('width', '80px')
            var sl6 = createElement('h4')
            sl6.html('Shuffle Questions.')
            sl6.position(displayWidth/2 - 250,displayHeight/2 )
text(this.slid4,displayWidth/2 - 250,displayHeight/2 - 150);
console.log(this.slid4);
set1.mousePressed(()=>{
    var b2 = new Button();
    b2.display();
    set.hide()
    set1.hide()
    slider1.hide()
    slider2.hide()
    slider3.hide()
    slider5.hide()
    slider6.hide()
    this.slider4.hide()
    this.sl4.hide()
    sl1.hide()
    sl2.hide()
    sl3.hide()
sl5.hide()
sl6.hide()
})    
        })
      
})
         
var op1 = createInput('').attribute('placeholder','Option A')
op1.position(displayWidth/2,displayHeight/2 - 170)
op1.style("font-size",'24px')
var op2 = createInput('').attribute('placeholder','Option B')
op2.position(displayWidth/2,displayHeight/2 - 140)
op2.style("font-size",'24px')
var op3 = createInput('').attribute('placeholder','Option C')
op3.position(displayWidth/2,displayHeight/2 - 110)
op3.style("font-size",'24px')
var op4 = createInput('').attribute('placeholder','Option D')
op4.position(displayWidth/2,displayHeight/2 - 80)
op4.style("font-size",'24px')
        

    
})
})

}
}
