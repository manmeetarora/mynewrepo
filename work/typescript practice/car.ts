/// <reference path="" />

class car{
	engine:string;

	constructor(engine:string){
	this.engine=engine
	}

	start():void
	{
	alert("engine started : "+this.engine)
	}

	stop():void
	{
	alert("engine stopped : "+this.engine)
	}
}

window.onload=function(){
	var obj=new car("v8")
	obj.start()
	obj.stop()
}

declare var $;

alert($("p").text())