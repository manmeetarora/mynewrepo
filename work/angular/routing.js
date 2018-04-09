var app=angular.module("myapp");

app.controller("MainController",function($scope,$location,$interval)
{

/*var decreaseCount=function(){
  $scope.countdown -=1;
  if($scope.countdown < 1)
  {
  	$scope.search($scope.username);
  }
};
 var countInterval=null;
var startCountInterval=function(){
countInterval=$interval(decreaseCount,1000,$scope.countdown);
};
*/
$scope.search=function(username)
{
/*if(countInterval){
	$interval.cancel(countInterval);
	countInterval=null;
}*/
$location.path("/user/"+username);
};

/*$scope.countdown=10;
startCountInterval();*/
});

