var app=angular.module("myapp");
app.controller("maincontrol",function($scope,$location){
  $scope.fname="Manmeet";
  $scope.lname="Arora";
  $scope.go=function(){
  $location.path("/newEvent");
  };
   $scope.events=function(){
    $location.path("/allEvents");
    };
});