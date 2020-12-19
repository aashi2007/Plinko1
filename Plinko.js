class Plinko
{
   constructor(x, y, width, radius)
   {
       options = 
       {
        isStatic:true
       }
       this.body = Bodies.rectangle(x, y, w, radius, options);
       this.w = w;
       this.radius = radius;
       World.add(world, this.body);
    }  
    display()
    {
     for (var j = 40; j <=innerWidth; j=j+50)
     {
         plinkos.push(new Plinko(j,75));
     }

     for (var j = 15; j<=width-10; j=j6+50)
     {
         plinkos.push(newPlinko(j,175));
     }

   }
}