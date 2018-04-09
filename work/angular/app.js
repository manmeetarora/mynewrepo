var app=angular.module("myapp",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	         .when("/main",{
	         	templateUrl:"main.html",
	         	controller:"MainController"
	         })
	         .when("/user/:username",{
	         	templateUrl:"userdetails.html",
	         	controller:"UserController"
	         })
	         .when("/repo/:username/:reponame",{
	         	templateUrl:"repo.html",
	         	controller:"RepoController"
	        
	         })
              .otherwise({redirectTo:"/main"});
});