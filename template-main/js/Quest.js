var Marks = 0;
class Quest{
    constructor(){
        
this.re1 = createElement('h2')
this.re2 = createElement('h2')

        this.q1 = createElement('h2')
        this.q2 = createElement('h2')
        this.q3 = createElement('h2')
        this.q4 = createElement('h2')
        this.q5 = createElement('h2')
        this.q6 = createElement('h2')
       this.capture = createCapture(VIDEO)
  image(this.capture,displayWidth/2 - 200,displayHeight/2 -200,200,200);

  cam.visible = true;
                this.radio = createRadio()
        this.radio.option('Universal Radio Locator',1)
        this.radio.option('Uniform Resource Locatant',2)
        this.radio.option('Uniformity Ratio Lender',2)
                this.radio.option('Uniform Resource Locator',4)
                this.radio2 = createRadio()
        this.radio2.option('Indira Point')
        this.radio2.option('Kanniyakumari')
        this.radio2.option('Rameshwaram')
                this.radio2.option('Trivandrum')
                this.radio3 = createRadio()
                this.radio3.option('Ha Noi')
                this.radio3.option('Hue')
                this.radio3.option('Ho Chi Min')
                        this.radio3.option('Can tho')
        
                        this.radio4 = createRadio()
                        this.radio4.option('8100 mtrs')
                        this.radio4.option('7600 mtrs')
                        this.radio4.option('8848 mtrs')
                                this.radio4.option('8880 mtrs')
                                this.radio5 = createRadio()
                                this.radio5.option('Anny Dsouza')
                                this.radio5.option('Jacques Picard')
                                this.radio5.option('Katy Sullivan')
                                        this.radio.option('Buzz Aldrin')
                                        this.radio6 = createRadio()
                                        this.radio6.option('100')
                                        this.radio6.option('9899')
                                        this.radio6.option('9001')
                                                this.radio6.option('1')
        
   }
    display(){
       
        
            console.log(Marks)
            // if(this.radio.value()== '1'){
            //     Marks = Marks +1;
            // }
            // if(this.radio2.value()== '1'){
            //     Marks = Marks +1;
            // }
            // if(this.radio3.value()== '3'){
            //     Marks = Marks +1;
            // }
            // if(this.radio4.value()== '2'){
            //     Marks = Marks +1;
            // }               
                this.q1.html('Q1) What is full form of U.R.L?')
                this.q1.position(displayWidth/2- 150,displayHeight/2 - 330)
                this.radio.position(displayWidth/2- 250,displayHeight/2 - 270)
                this.q2.html('Q2)What is the Southern most tip of the Indian Union')
                this.q2.position(displayWidth/2- 150,displayHeight/2 - 240)
                this.radio2.position(displayWidth/2- 250,displayHeight/2 - 180)
                this.q3.html('Q3)Capital of Vietnam?')
                this.q3.position(displayWidth/2- 150,displayHeight/2 - 170)
                this.radio3.position(displayWidth/2- 250,displayHeight/2 - 110)
                console.log(Marks)
        
                this.q4.html('Q4)Height of Mt. Everest?')
                this.q4.position(displayWidth/2- 150,displayHeight/2 - 90)
                this.radio4.position(displayWidth/2- 250,displayHeight/2 - 20 )
                this.q5.html('Q5)One of the First Person to reach bottom of Mariana Trench')
                this.q5.position(displayWidth/2- 150,displayHeight/2 )
                this.radio5.position(displayWidth/2- 250,displayHeight/2 + 60)
                this.q6.html('Q6)Difference between smallest four digit and heighest three digit?')
                this.q6.position(displayWidth/2- 150,displayHeight/2 + 80)
                this.radio6.position(displayWidth/2- 250,displayHeight/2 + 150)
        // this.radio.style('fieldset','vertical')
        this.radio.style('font-size','20px')
        this.radio2.style('font-size','20px')
        this.radio3.style('font-size','20px')
        this.radio4.style('font-size','20px')
        this.radio5.style('font-size','20px')
        this.radio6.style('font-size','20px')
        var fi1 = createButton("Submit");
        fi1.style('font-size','30px')
        fi1.style('background-color','rgb(190, 225, 232)')
        fi1.position(displayWidth/2- 250,displayHeight/2 + 200)
        fi1.mousePressed(()=>{
            this.radio.hide()
            this.radio2.hide()
            this.radio3.hide()
            this.radio4.hide()
            this.radio5.hide()
            this.radio6.hide()
        this.q1.hide()
        this.q2.hide()
        this.q3.hide()
        this.q4.hide()
        this.q5.hide()
        this.q6.hide()
fi1.hide()
this.capture.hide()
        // if(mousePressedOver(cam)){
        //     var captur = createCapture()
        // }
    //   clear()
    // capture.hide()
       
    this.re1.html("THANK YOU FOR GIVING TEST.")
    this.re2.html("RESULTS AWAITED.")
    this.re1.position(displayWidth/2,displayHeight/2)
    this.re2.position(displayWidth/2,displayHeight/2 + 50)
cam.visible = false;
        })
        
    }
}