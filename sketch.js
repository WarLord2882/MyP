const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,20);
    platform = new Ground(150, 605, 300, 170);

    box1 = new Box(900,570,70,70);
    box2 = new Box(1120,570,70,70);
    pig1 = new Pig(1010, 500);
    log1 = new Log(1010,500,300, PI/2);

    box3 = new Box(900,490,70,70);
    box4 = new Box(1120,490,70,70);
    pig3 = new Pig(1010, 600);

    log3 =  new Log(1010,430,300, PI/2);

    box5 = new Box(1010,410,70,70);
    log4 = new Log(960,390,150, PI/7.5);
    log5 = new Log(1070,390,150, -PI/7);

    bird = new Bird(200,330);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200,  y:330});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:200,y:325})
    slingshot.attach(bird.body);
}
}