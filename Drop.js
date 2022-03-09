class Drop {
    constructor(x,y){
        var options = {
            friction: 0.001,
        }
    this.rain = Bodies.circle(x,y,5,options)
    World.add(world, this.rain)
    
    }

    display()
	{
		
            var pos = this.rain.position;		
			push()
			translate(pos.x, pos.y);
            ellipseMode(CENTER)
			fill("darkblue");
            ellipse(0,0,10);
            pop()
	
        }

    update(){
        if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain, {x: random(0,400) , y: random(0.400)})
        }
    }



}

