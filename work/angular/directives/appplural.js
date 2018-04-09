var app=angular.module("myapp",[]);
app.controller("maincontroller",function($scope)
	{

      var person={
             firstname:"manmeet",
             lastname:"arora",
             imagesrc:"........"
      };
		$scope.message="helllo";
		$scope.person=person;
	});