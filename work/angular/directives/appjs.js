var createworker= function(){

var task1=function()
{
console.log("task 1 is running");
};

var task2=function()
{
console.log("task 2 is running");
};

return {
     job1:task1,
     job2:task2
};

};
var worker=createworker();
worker.job1();
worker.job2();