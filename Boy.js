class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
      var bpos =this.body.position;
      imageMode(CENTER);
      image(this.image,bpos.x,bpos.y,this.width,this.height);
    }
  }
