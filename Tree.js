class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.image = loadImage("Images/tree.png");
      World.add(world, this.body);
    }
    display(){
      var tpos =this.body.position;
      imageMode(CENTER);
      image(this.image,tpos.x,tpos.y,this.width,this.height);
    }
  }
