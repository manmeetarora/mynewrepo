/*var app=angular.module("myapp",[]);
app.controller("mycontrol",function($scope,github){

      var userComplete=function(data){
        $scope.user=data;
        github.getRepo($scope.user).then(onRepo);
      }
   var onRepo=function(data){
    $scope.repos=data;
   };

	$scope.search=function(username){
   github.getUser(username).then(userComplete);
	};
});*/

var app=angular.module("myapp",[]);
app.controller("mycontrol",function($scope,github){

	$scope.search=function(username){
   github.getUser(username).then(function(data){
   	$scope.user=data;
   	github.getRepo($scope.user).then(function(data)
   	{
      $scope.repos=data;
   	});
   });
	};
});