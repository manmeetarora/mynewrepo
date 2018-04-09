import shape=require("./Ishape")
import circle=require("./circle")
import triangle=require("./triangle")

var obj1=new circle.circle();
var obj2=new triangle.triangle();
function drawshape(obj){
        
        obj.draw()	
}
drawshape(obj1)
drawshape(obj2)
