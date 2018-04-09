var num: number | string = 2;
num = "hello"
console.log(num)
var str;

function getlength(x:string[]) {
    console.log(x.length)
}

getlength(['manmeet', 'singh', 'arora']);

class person{
    x: string[];

    constructor(x: string[]) {
        this.x = x;
}
    printArr(): void{
        for (var i = 0; i < this.x.length; i++){
            console.log(this.x[i]);
        }
    }
}

var obj = new person(["hello", "there"]);
obj.printArr();

var calcArea = function (rect: {x:number,y?:number}) {
    if (rect.y == undefined) {
        return rect.x * rect.x;
    }
    else return rect.x * rect.y;
}
var rectangle = calcArea({ x: 20, y: 40 });
console.log(rectangle);

var obj1 = {
    sayHi:(msg:string)=>{console.log(msg)}
}
obj1.sayHi("hello welcome");


var squareit = (x: number): number => x+10;
squareit(1); 

class myclass{
    display(): void{

    }
    
}

var sqit: (x: number) => void;

var areacal: (rectan: { h: number, w?: number }) => number;

areacal = (rectan)=>{
    if (rectan.w !== undefined) {
        return rectan.h * rectan.w;
    }
    else {
        return rectan.h * rectan.h;
    }
}
console.log(areacal({ h: 23, w: 57 }));
console.log(areacal({ h: 2 }));