var app=angular.module("myapp",[]);

app.controller("mycontroller",function($scope,$http,$interval,$anchorScroll,$location)
{
	$scope.search=function(username){
	$http.get("https://api.github.com/users/"+username).then(function(response){
		$scope.user=response.data;
		$http.get($scope.user.repos_url).then(function(response){
        $scope.repos=response.data;
        $location.hash("userdetails");
        $anchorScroll();
        if(countdowninterval)
        {
        	$interval.cancel(countdowninterval);
        	$scope.countdown=null;
        }
		});
	});
  };

  var decreaseCount=function()
  {
    $scope.countdown -=1;
    if($scope.countdown < 1 )
    {
    	$scope.search($scope.username);
    }
  };
  var countdowninterval=null;
    var startCountDown=function()
    {
     countdowninterval= $interval(decreaseCount,1000,$scope.countdown);
    };

    $scope.countdown=5;
    startCountDown();
});