var app=angular.module("myapp",[]);
app.controller("writingcontrol",function($scope,$http){
     $http.get("myfile.json").then(function(response){
       $scope.user=response.data;
     });
var dataObj = {
				name : 'Manmeet',
				employees : '55',
				headoffice : 'Chicago'
		};	
		$http.post('/savecompany_json.json', dataObj);
		
		$scope.name='';
		$scope.employees='';
		$scope.headoffice='';
 

});