var app=angular.module("myapp");
 
 app.controller("eventcontroller",function($scope,$location,eventservice,$resource){
   
    $scope.event=eventservice.getevent();

    
 });