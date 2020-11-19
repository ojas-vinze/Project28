class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var spos =this.body.position;
      imageMode(CENTER);
      image(this.image,spos.x,spos.y,this.r,this.r);
    }
  }
