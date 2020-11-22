class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width/10,this.height/10,options);
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var tpos =this.body.position;
      imageMode(CENTER);
      image(this.image,tpos.x,tpos.y,this.width,this.height);
    }
  }
