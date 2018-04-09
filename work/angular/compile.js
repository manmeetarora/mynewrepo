var app=angular.module("myapp",['ngResource']);
app.controller("compilecontroller",function($scope,$compile){
 $scope.appelementtodiv=function(markup){
 return $compile(markup)($scope).appendTo(angular.element("#appendhere"));
 };
});