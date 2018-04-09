var app=angular.module("myapp",[]);
app.controller("MainController",
	function($scope){
   $scope.value="Manmeet"; 
   $scope.lastname="Arora";
   $scope.sayhi=function()
   {
   alert($scope.value);
   }
});
app.controller("controller2",
	function($scope){
   
   $scope.showname=true;

   $scope.hideit=function(){
   	$scope.showname=false;
   }
   $scope.showit=function(){
   	$scope.showname=true;
   }

   $scope.names=[
{name:'Jani',country:'Norway'},
{name:'Hege',country:'Sweden'},
{name:'Kai',country:'Denmark'}]
});