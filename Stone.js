class Stone{
	constructor(x,y,w,h)
	{
	var options={
		restitution:0.9,
		friction:0.8,
		density:12,
	}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
		this.body=Bodies.rectangle(x,y,w,h,options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
            var angle=this.body.angle;		
			push()
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.w,this.h)
			pop()
	}

}