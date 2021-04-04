let k;
function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
 if(keyIsPressed){
  
  if(key == 'w'){
    k = 1;
  }
  if(key == 't'){
    k = 2;
  }
  if(key == 'c'){
    k = 3;
  }
 }
  
 if (k == 1){
   background(220,100);
   randomSeed(0);
 }
  
 else if (k == 2){
   background(250, 250, 110);
   randomSeed(0);
 }
  
 else if(k == 3){
   background(255,199,46);
   randomSeed(0);
 }
   
  
 if (k == 1){
    let x,y,r;
  
  let shadex= map (mouseX,0,windowWidth,-windowWidth/2,windowWidth/2); //shade
  let shadey= map (mouseY,0,windowHeight,-windowHeight/2,windowHeight/2);
  
  for(x=72;x<windowWidth-40; x+=150){
    for(y=72;y<windowHeight-40; y+=150){
      
         
    
      
      noStroke();
      fill(150,150);
      beginShape();
      vertex(x, y-29);
      vertex(x, y+29);
      vertex(x+shadex, y+shadey);
      endShape(); //cup shade
      
      noStroke();
      fill(150,150);
      beginShape();
      vertex(x, y-48);
      vertex(x, y+48);
      vertex(x+shadex/2.5, y+shadey/2.5);
      endShape(); //plate shade
      
      
      fill(245,254,255);
      stroke(44,75,138,100);
      strokeWeight(1);
      ellipse(x,y,93,93); //plate
      
      
      fill(248,254,255);
      stroke( 44,75,138,120);
      strokeWeight(1);
      rect(x,y-5.5,50,11,5); //cup handle 
      
      
      
     
      fill(248,254,255);
      stroke(44,75,138,120);
      strokeWeight(1);
      ellipse(x,y,65,65); //cup
      
      
     
      fill(55,217,225); //water
      stroke(200,155);
      strokeWeight(4.5);
      ellipse(x,y,50,50); //water
      
   
      
      
      if(x%4 ==0 ){
        fill(255,51,100,200);
        noStroke();
        arc(x+20, y-20,9,9,radians(180),radians(90)); //lipstick
        
        
        fill(243,247,122);
        stroke(235,206,45,220);
        strokeWeight(3);
        arc(x-7, y+7,25,25,radians(45),radians(225)); //lemon
        
      }
      
      
      
      if(x%4 !=0 ){
        fill(255,51,100,200);
        noStroke();
        arc(x-20, y+20,10,10,radians(0),radians(270)); //lipstick
      
        fill(243,247,122);
        stroke(235,206,45,220,240);
        strokeWeight(3);
        arc(x+6, y-7,25,25,radians(225),radians(45)); //lemon
    }
    }
  }
      
  }
  
  

 
 else if (k == 2){
   let x,y,r;
  
  let shadex= map (mouseX,0,windowWidth,-windowWidth/2,windowWidth/2); //shade
  let shadey= map (mouseY,0,windowHeight,-windowHeight/2,windowHeight/2);
  
  for(x=72;x<windowWidth-60; x+=150){
    for(y=72;y<windowHeight-60; y+=150){
      
         
      
      fill(248,254,255);
      stroke(243,112,255,190);
      strokeWeight(1);
      ellipse(x+57, y+57,50,50);
      noFill();
      stroke(243,112,255,190);
      strokeWeight(1);
      ellipse(x+57, y+57,35,35);
      //cookies plate
      
      fill(219,155,67);
      stroke(125,85,0,200);
      strokeWeight(1);
      ellipse(x+50,y+50,20,20);
      fill(219,155,67);
      stroke(125,85,0,200);
      strokeWeight(1);
      ellipse(x+55,y+55,20,20);
      fill(219,155,67);
      stroke(125,85,0,200);
      strokeWeight(1);
      ellipse(x+62,y+62,20,20);
      //cookies
      
      fill(125,85,0,200);
      noStroke();
      ellipse(x+60,y+65,3.5,3.5);
      fill(125,85,0,200);
      noStroke();
      ellipse(x+65,y+58,3.5,3.5);
      fill(125,85,0,200);
      noStroke();
      ellipse(x+45,y+45,3.5,3.5);
      fill(125,85,0,200);
      noStroke();
      ellipse(x+50,y+56,3.5,3.5);
      fill(125,85,0,200);
      noStroke();
      ellipse(x+70,y+63,3.5,3.5);
      //chocochips
      
      noStroke();
      fill(243,112,255,70);
      beginShape();
      vertex(x, y-29);
      vertex(x, y+29);
      vertex(x+shadex, y+shadey);
      endShape(); //cup shade
      
      noStroke();
      //fill(0,100, 149,70);
      fill(243,112,255,70);
      beginShape();
      vertex(x, y-48);
      vertex(x, y+48);
      //vertex(x+shadex/2.5-20, y+shadey/2.5-10);
      //vertex(x+shadex/2.5+10, y+shadey/2.5+20);
      vertex(x+shadex/2.5, y+shadey/2.5);
      endShape(); //plate shade
      
      
      fill(245,254,255);
      stroke(243,112,255,190);
      strokeWeight(1);
      ellipse(x,y,93,93); //plate
      
     
      fill(248,254,255);
      stroke(243,112,255,190);
      stroke(243,112,255,190);
      strokeWeight(1);
      rect(x,y-5.5,50,11,5); //cup handle //243,112,255 //0,164, 149
      
      
      
      
      fill(248,254,255);
      stroke(243,112,255,190);
      strokeWeight(1);
      ellipse(x,y,65,65); //cup
      
      
      noFill();
      strokeWeight(1.5);
      stroke(203,152,5);
      bezier(x+25,y-35,x-15,y-30,x+40,y-30,x+5,y-5); //teabag line
      
      fill(233,162,12,200);
      stroke(138,94,0);
      strokeWeight(0.5);
      beginShape(); //teabagtop
      vertex(x+20,y-40);
      vertex(x+23,y-42);
      vertex(x+31,y-30);
      vertex(x+26,y-27);
      endShape();
      
      fill(70,167,0,200); //teabag bottom
      stroke(30,78,0,200);
      strokeWeight(0.5);
      beginShape();
      vertex(x+23,y-42);
      vertex(x+28,y-50);
      vertex(x+42,y-35);
      vertex(x+31,y-30);
      endShape();
      
      
      fill(170,236,115,200); //tea
      stroke(200,155);
      strokeWeight(4.5);
      ellipse(x,y,50,50); //water
      
   
      
      
        //if(x%4 ==0 ){
        //fill(255,51,100,200);
        //noStroke();
        //arc(x+20, y-20,9,9,radians(180),radians(90)); //lipstick
      //}
      // if(x%4 !=0 ){
      // fill(255,51,100,200);
       // noStroke();
        //arc(x-20, y+20,10,10,radians(0),radians(270)); //lipstick
    //}
      
  }
  }
  
   
   
 }
 else if(k == 3){
   let x,y,r;
  
  let shadex= map (mouseX,0,windowWidth,-windowWidth/2,windowWidth/2); //shade
  let shadey= map (mouseY,0,windowHeight,-windowHeight/2,windowHeight/2);
  
  for(x=72;x<windowWidth-40; x+=170){
    for(y=72;y<windowHeight-40; y+=170){
      
         
      
      fill(248,254,255);
      stroke(0,164, 149,190);
      strokeWeight(1);
      ellipse(x+70, y+30,50,50);
      fill(0,164, 149,30);
      stroke(0,164, 149,190);
      strokeWeight(1);
      ellipse(x+70, y+30,35,35);
      //sugar plate
      
      fill(255);
      stroke(180);
      strokeWeight(1);
      rect(x+57,y+15,13,13,3);
      fill(255);
      stroke(180);
      strokeWeight(1);
      rect(x+75,y+25,13,13,3);
      fill(255);
      stroke(180);
      strokeWeight(1);
      rect(x+57,y+30,13,13,3);
      //sugar
      
     
      
      noStroke();
      fill(5,53,355,80);
      //fill(0,100, 149,90);  //navyshade
      //fill(243,112,255,70); //pinkshade
      beginShape();
      vertex(x, y-29);
      vertex(x, y+29);
      vertex(x+shadex, y+shadey);
      endShape(); //cup shade
      
      noStroke();
      fill(5,53,355,80);
      beginShape();
      vertex(x, y-48);
      vertex(x, y+48);
      vertex(x+shadex/2.5, y+shadey/2.5);
      endShape(); //plate shade
      
      
      fill(245,254,255);
      stroke(0,164, 149,190); //blue
      strokeWeight(1);
      ellipse(x,y,93,93); //plate
      
     
      fill(248,254,255);
      stroke(0,164, 149,190); //blue
      strokeWeight(1);
      rect(x,y-5.5,50,11,5); //cup handle //243,112,255 //0,164, 149
      
      
      
      
      fill(248,254,255);
      stroke(0,164, 149,190); //blue
      strokeWeight(1);
      ellipse(x,y,65,65); //cup
      
      
     
  
      fill(128, 97, 31); //cofee
      stroke(200,155);
      strokeWeight(4.5);
      ellipse(x,y,50,50); //water
      
   
      
      
      if(x%4 ==0 ){
        fill(255,51,100,200);
        noStroke();
        arc(x+20, y-20,9,9,radians(180),radians(90)); //lipstick
      }
      if(x%4 !=0 ){
       fill(255,51,100,200);
        noStroke();
        arc(x-20, y+20,10,10,radians(0),radians(270)); //lipstick
    }
      
  }
  }
    
 }  
 }
