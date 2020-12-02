var cam
class test{
constructor(){
  this.warn = createElement('h8')
  this.warn2 = createElement('h8')

}

    display(){
  
        var test1 = createButton('VIEW MY TESTS')
                  test1.position(displayWidth / 2 - 70, displayHeight / 2 - 100)
                 
                  test1.style('background-color','Yellow')
                  test1.style('font-size','24px')
                  test1.mousePressed(() =>{
                      test1.hide();
                      textSize(25);
                    //   var b1 = new Button(100,100,50,50)
                    this.warn.html('No Live Test Right Now')
                    this.warn.position(displayWidth / 2 , displayHeight / 2 - 250)
                    this.warn.style('font-size','24px')
                    this.warn2.html('Click Demo To Get A Better Idea Of Main Test.')
                    this.warn2.position(displayWidth / 2 , displayHeight / 2 - 200)
                    this.warn2.style('font-size','24px')
                      var demo = createButton('DEMO')
                  demo.position(displayWidth / 2 , displayHeight / 2 + 50)
                  demo.style('font-size','25px')
                
                
                  demo.mousePressed(()=>{
                    // remove();
                    this.warn.hide()
                    this.warn2.hide()
demo.hide()
              var   b1 = new Button();
                 b1.display();
                  })
                })
                // drawSprites();
        }
    }
