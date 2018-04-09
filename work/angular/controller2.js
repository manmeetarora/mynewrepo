angular.module("myapp").controller("controller2",
	function($scope){
   
   $scope.showname=true;

   $scope.hideit=function(){
   	$scope.showname=false;
   }
   $scope.showit=function(){
   	$scope.showname=true;
   }
});