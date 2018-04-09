var app=angular.module("myapp",[]);
app.controller("mycontrol",function($scope,$http)
{
$scope.search=function(username){
$http.get("https://api.github.com/users/"+username).then(function(response)
{
$scope.data=response.data;
$http.get($scope.data.repos_url).then(function(response){
$scope.repos=response.data;	
});
});
};

$scope.repoSortOrder="-stargazers_count";


});