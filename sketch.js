const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world
var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;

    drop = new drops(200, 400, 10,10)
    
}

function draw(){
    background("black");    
    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        drop.push(new drops(random(0,400), random(0,400)))
    }

    drop.display()
    resetRain()
}   

function resetRain(){
    if (this.drop.position > height){
        Matter.Body.setPosition(this.drop, {x:random(0,550), y:random(0,400)})
    }
}
