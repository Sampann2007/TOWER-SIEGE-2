const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var GameState="NotLaunch";

function setup(){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    ball=new Ball(200,200,50);
    redBox=new RedBox(550,159)
    greenBox=new GreenBox(550,159);
    blueBox=new BlueBox(532,159);
    yellowBox=new YellowBox(541,140);
    spring=new Projectile(ball.body,{x:200,y:200});
    ground=new PlatForm(400,390,800,20);
    groundHovering=new PlatForm(550,160,200,20);
    blueBox2=new BlueBox(550,140);
    greenBox2=new GreenBox(540,120);
    redBox2=new RedBox(500,360);
    greenBox3=new GreenBox(480,360);
    blueBox3=new BlueBox(520,360);
    yellowBox2=new YellowBox(490,340);
    blueBox4=new BlueBox(510,340);
    redBox3=new RedBox(500,320);
    ground2=new PlatForm(790,200,20,400);
    ground3=new PlatForm(10,200,20,400);
    ground4=new PlatForm(400,10,800,20)



}
function draw(){
    background(247,223,178);
    Engine.update(engine);
    yellowBox.display();
    ground.display();
    groundHovering.display();
    spring.display();
    greenBox.display();
    blueBox.display();
    redBox.display();
    blueBox2.display();
    greenBox2.display();
    redBox2.display();
    greenBox3.display();
    blueBox3.display();
    yellowBox2.display();
    blueBox4.display();
    redBox3.display();
    ground2.display();
    ground3.display();
    ground4.display();
   
    


    ball.display();
}
function mouseDragged(){
    if(GameState==="NotLaunch"){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased(){
    GameState="Launch"
    spring.release();
}
function keyPressed(){
    if(keyCode===32){
        spring.attach(ball.body);
        GameState="NotLaunch";
    }
}