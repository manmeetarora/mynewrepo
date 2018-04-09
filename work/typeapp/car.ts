/// <reference path="C:\Users\Arora\OneDrive\work\typeapp\node_modules\@types\node\index.d.ts" />

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
$(document).ready(function(){
alert($("p").text())
});