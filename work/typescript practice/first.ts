var message:string = "Hello World" 
console.log(message)

class greeting{
	greet():void{
	   console.log("hello world again")
	}
}
var obj=new greeting()
obj.greet()



var result= 4>0?'true':'false'
console.log(result)

function calculate(...num:number[]){
	var i
	var sum=0
	for(i=0;i<num.length;i++){
	sum=sum+num[i]
	}
	console.log("total sum = "+sum)
}
calculate(2,2,2,2)

//m

var cal=function(a:number,b:number){
	return a+b
}
console.log(cal(4,6))

//m

function factorial(number){
	if(number<=0){
	return 1
	}
	else{
	return (number*factorial(number-1))
	}
}
console.log(factorial(7))

//m

function employee(name,id){
	this.name=name
	this.id=id
}

var person=new employee("manmeet",1)
employee.prototype.email="manmeetarora66@yahoo.com"
console.log(person.name)
console.log(person.id)
console.log(person.email)

//m

var name1=new String("manmeet")
console.log(name1)


var re = /apples/gi
var str="i like apples"
if(str.search(re)==-1){
	console.log("does not contain apples")
}
else{
	console.log("contain apples")
}

//m
function mul(...num:number[]){
	var sum=0
	for(var i=0;i<num.length;i++){
	sum=sum+num[i]
	}
	console.log(sum)
}
mul(2,3,4,5)

//m

