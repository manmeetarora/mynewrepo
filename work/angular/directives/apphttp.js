var app=angular.module("myapp",[]);
app.controller("mycontroller",function($scope,$http)
{
$scope.search=function(username){
$http.get("https://api.github.com/users/"+username).then(function(response)
{
$scope.data=response.data;
});
};
});

/*Second way to work with controllers. Controllers are just the functions
var app=angular.module("myapp",[]);
var mycontroller=function($scope,$http){

$http.get("https://api.github.com/users/mojombo").then(function(response)
{
$scope.data=response.data;
});
};
app.controller("mycontroller",mycontroller);*/