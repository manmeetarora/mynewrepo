

class Calculator{
	private x: HTMLInputElement;
	private y: HTMLInputElement;
	private output: HTMLSpanElement;

    constructor(xid:string,yid:string,outputId:string)
    {
    this.x=<HTMLInputElement>document.getElementById(xid);
    this.y=<HTMLInputElement>document.getElementById(yid);
    this.output=<HTMLSpanElement>document.getElementById(outputId);
    this.wireEvents();
    }

    wireEvents(){
      document.getElementById('Add').addEventListener('click',event=>{
       this.output.innerHTML=this.add(parseInt(this.x.value),parseInt(this.y.value)).toString()
      });
       document.getElementById('Subtract').addEventListener('click',event=>{
       this.output.innerHTML=this.subtract(parseInt(this.x.value),parseInt(this.y.value)).toString()
      });
    }

    add(x:number,y:number){
    return x+y;
    }

    subtract(x:number,y:number){
    return x-y;
    }
}

window.onload=function(){
	var obj=new Calculator('X','Y','Output');
};