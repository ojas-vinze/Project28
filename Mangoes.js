class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restution:0
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var mpos =this.body.position;
      imageMode(CENTER);
      image(this.image,mpos.x,mpos.y,this.r,this.r);
    }
  }
