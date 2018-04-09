var app=angular.module("myapp",[]);
app.controller("maincontrol",function($scope,$http)
	{
		$http.get("datafile.txt").then(function(response)
		{
                   $scope.user=response.data
		});
	});