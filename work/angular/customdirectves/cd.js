var app=angular.module("myapp",[]);
app.controller("maincontrol",function($scope){
 $scope.names=['manmeet','singh','arora'];
 $scope.test="";
});
app.directive("mySample",function(){
  return {
  	restrict:'E',
  	//replace:true,
   template:"<input type='text' ng-model='name' />{{name}} ",
   scope:{

   }
  };
});

 app.directive("myName",function(){
    return {
   templateUrl:'myname.html',
   scope:{

   }
    };
  });

 app.directive("notNumber",function(){
    return {
            require: '?ngModel',
       link: function (scope, element, attrs,ngModel) {
            scope.$watch(attrs.ngModel, function (v) {
            	if(/[0-9]/gi.test(v)){
                //console.log('value changed, new value is: ' + v);
                alert("Dont enter numbers");
                ngModel.$setViewValue("aa")
           
               
            }
            else{
           
        }
            });
        }
    };
 });
//  ng-repeat="event in eventslist"
 // sometimes you mention <directive-name  event1="event"  />

//and in scope:{event:'=event1'}