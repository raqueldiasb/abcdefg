
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotator1;
var bola1;
var chao;
var bola_opcoes;
var chao_opcoes;
var angle = 60;
var btn2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;
     
	//btn2 = createImg('up.png');
    //btn2.position(350,30);
    //btn2.size(50,50);
    //btn2.mouseClicked(bolas.push(new bolinha(mouseX,mouseY,10,bola_opcoes)));
	var bola_opcoes = {
		restitution: 0.50,
		frictionAir: 0.01
	}

	var chao_opcoes = {
		isStatic: true
	}
	bola1 = new bolinha(100,10,10,bola_opcoes)

	chao = Bodies.rectangle(100,600,400,30,chao_opcoes);
	World.add(world,chao);

	rotator1 = Bodies.rectangle(400,400,120,15,chao_opcoes);
	World.add(world,rotator1)
	//Crie os Corpos aqui.

    rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < bola1.length; i++) {
  bola1[i].show();
	}
  Matter.Body.rotate(rotator1,angle)
  bola1.show();
  push();
  translate(rotator1.position.x,rotator1.position.y)
  rect (0,0,100,20);
  angle += 0.1;

  
  rect(chao.position.x,chao.position.y,1000,30)
  drawSprites();
 
}

class bolinha {
	constructor(x, y, radius) {
		this.body = Bodies.circle(x, y, radius, bola_opcoes);
		this.radius = radius;
		World.add(world, this.body);
		this.show = function () {
			var pos = this.body.position;
			var angle = this.body.angle;

			push();
			translate(pos.x, pos.y);
			ellipse(0, 0, this.radius);
			pop();
		};
	}
}
function criarbolas()
{
	bola1 = new bolinha(300,10,10,bola_opcoes)	
}