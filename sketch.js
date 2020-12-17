const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground;
var div1, div2, div3, div4, div5, div6, div7;

//row 1
var p1, p2, p3, p4,p5,p6, p7, p8;
//row2
var q1,q2, q3, q4,q5,q6, q7;
//row3
var r1, r2, r3, r4,r5,r6, r7, r8;
//row4
var s1,s2, s3, s4,s5,s6, s7;

var particles=[];

function setup() {
	createCanvas(490, 800);


	engine = Engine.create();
	world = engine.world;


	ground= new Ground(0,790,990,13);
	div1= new Div(0,685,4,200);
	div2= new Div(68.5714285714,685,4,200);
	div3= new Div(137.142857143,685,4,200);
	div4= new Div(205.714285714,685,4,200);
	div5= new Div(274.285714285,685,4,200);
	div6= new Div(342.857142856,685,4,200);
	div7= new Div(416.428571427,685,4,200);
	div8= new Div(483.999999998,685,4,200);
	
	p1= new  Plinko(33, 70);
	p2= new  Plinko(93, 70);
	p3= new  Plinko(153, 70);
	p4= new  Plinko(213, 70);
	p5= new  Plinko(273, 70);
	p6= new  Plinko(333, 70);
	p7= new  Plinko(393, 70);
	p8= new  Plinko(453, 70);

	q1= new Plinko(56,  160);
	q2= new Plinko(126, 160);
	q3= new Plinko(187, 160);
	q4= new Plinko(248, 160);
	q5= new Plinko(309, 160);
	q6= new Plinko(370, 160);
	q7= new Plinko(431, 160);

	r1= new  Plinko(33, 260);
	r2= new  Plinko(93, 260);
	r3= new  Plinko(153, 260);
	r4= new  Plinko(213, 260);
	r5= new  Plinko(273, 260);
	r6= new  Plinko(333, 260);
	r7= new  Plinko(393, 260);
	r8= new  Plinko(453, 260);

	s1= new Plinko(56,  360);
	s2= new Plinko(126, 360);
	s3= new Plinko(187, 360);
	s4= new Plinko(248, 360);
	s5= new Plinko(309, 360);
	s6= new Plinko(370, 360);
	s7= new Plinko(431, 360);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();

  q1.display();
  q2.display();
  q3.display();
  q4.display();
  q5.display();
  q6.display();
  q7.display();

  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();
  r7.display();
  r8.display();

  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();

  if(frameCount%30===0){
	  particles.push(new Particle(random(width/2-10, width/2+10),5,5));
  }

  for(var j=0; j<particles.length;j++){
	  particles[j].display();
  }


  drawSprites();
 
}

this.t =[];
// var p=[this.body.position.x, this.body.position.y];
//     this.t.push(p);
//     for(var i=0; i<this.t.length; i++){

//       image (this.smoke,this.t[i][0], this.t[i][1]);
//     }

