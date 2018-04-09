var app=angular.module("myapp");

app.controller("RepoController",function($scope,$routeParams,github)
{
     var username=$routeParams.username;
    var reponame=$routeParams.reponame;
   
    github.getRepoDetails(username,reponame).then(function(data)
    {
       $scope.repo=data;
    });
 });
