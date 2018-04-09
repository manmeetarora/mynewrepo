var app=angular.module("myapp");

app.controller("UserController",function($scope,github,$routeParams)
{
    var onusercomplete=function(data){
     $scope.user=data;
      github.getRepo($scope.user).then(onRepo);
    }	;
     var onRepo=function(data){
       $scope.repos=data;
     };
    
    $scope.show=function()
    {
      alert("hello");
    };
    $scope.username=$routeParams.username;
    github.getUser($scope.username).then(onusercomplete);
  
});