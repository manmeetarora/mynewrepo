console.log("interfaces are not converted to javascript, its just a part of typescript ")

interface person{
	fname:string,
	lname:string,
	fullname:()=>string
}

var person1:person={
	fname:"manmeet",
	lname:"arora",
	fullname:():string=>{return person1.fname+" "+person1.lname}
}
console.log(person1.fname)
console.log(person1.lname)
console.log(person1.fullname())

console.log("----------example 2--------------")
interface myinter{
	name:string,
	command:number|string[]
}

var hello:myinter={
	name:"manmeet",
	command:["manmeet","singh"]
}
console.log(hello.command)


interface arr{
	names:string[]
}
var myname={
	names:["abc","def","ghi"]
}
console.log(myname.names)

console.log("----------inheritance in interfaces------------")
 interface inter1
{
	name1:string
}
interface inter2 extends inter1
{
	name2:string
}
var res:inter2={
	name1:"manmeet",
	name2:"singh"
}
console.log(res.name1+" "+res.name2)

class first{
	car:string

	constructor(car:string){
	this.car=car
	}
	display():void
	{
	console.log("name of car"+this.car)
	}
}
var obj=new first("audi")
console.log(obj.car)
obj.display()


class firstcl{
	area:string

	constructor(area:string)
	{
	this.area=area
	}
	
}
class secondcl extends firstcl{
	display():void
	{
	console.log(this.area)
	}
}
var obj1=new secondcl("45")
obj1.display()

console.log("--------inheritance in classes and interface--------")

interface ILoan { 
   interest:string 
} 

class AgriLoan implements ILoan { 
   interest:string 
   rebate:string 
   
   constructor(interest:string,rebate:string) { 
      this.interest = interest 
      this.rebate = rebate 
   } 

   disp():void
   {
   console.log("Interest is : "+ob.interest+" Rebate is : "+ob.rebate  )
   }
} 

var ob = new AgriLoan("10","1") 
ob.interest="78"
ob.disp()

console.log("----------------------------------------------------------------------")

var person={
	fname:"manmeet",
    lname:"arora",
    fullname:()=>{}
}
person.fullname=()=>{ console.log(person.fname+" "+person.lname)  }
person.fullname()

console.log("----------------------------------------------------------------------")

var per={
	fname:"harmeet",
	lname:"arora"
}
function displ(obj)
{
	console.log(obj.fname+" "+obj.lname)
}
displ(per)