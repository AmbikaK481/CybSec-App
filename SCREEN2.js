class SCREEN2{
    constructor(){
        this.image1 = loadImage("Hack.jpg")
        this.image2 = loadImage("cyber bully.jpg")
        this.image3 = loadImage("Silent Cyberhacking.jpg")
        this.click = createButton('Cybe Video');
   }
   
  

   display(){
       imageMode(CENTER);
       strokeWeight(6)
       stroke("blue")
       fill(240)
       image(this.image1,x,y,150,350)
       image(this.image2,x,130,400,530)
       image(this.image3,70,y,120,60)
   }

   updateScreen2(){ 
     this.display(text("Welcome to screen3"))
   }
}

