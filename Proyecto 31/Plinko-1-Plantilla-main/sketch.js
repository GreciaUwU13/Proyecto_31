//Hola maestra buenas noches, disculpe la hora, aquí está mi proyecto, que tenga una linda noche <3
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//Matrices 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/8, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  //crea la segunda fila de objetos plinko
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  //crea la tercera fila de objetos plinko
  for (var j = 40; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  //crea la cuarta fila de objetos plinko
  for (var j = 10; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }


  //crea los objetos partícula
    for (var g = 5; g <= width; g=g+20){
    particles.push(new Particle(g, 10));
  }
 // Salian pocas particulas con este ragmento de código
   /* if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }*/
  
    
}
 


function draw() {
  background("pink");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for (var g = 0; g < particles.length; g++) {
    particles[g].display();}
}
