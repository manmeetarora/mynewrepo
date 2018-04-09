var app=angular.module("panelapp",[]);
app.controller("panelcontroller",function($scope){
	$scope.review={};
	$scope.addReview=function(){
      $scope.products.reviews.push($scope.review);
      $scope.review={};
	};
 $scope.products={
        reviews:[
             {
              stars:4,
              name:'abc',
              author:'manmeetarora66@yahoo.com'
             },
             {
              stars:5,
              name:'Manmeet',
              author:'manmeetarora003@gmail.com'
             }
        ]
 };
});
//dash  in html translates to camelcase in javascript