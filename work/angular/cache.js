var app=angular.module("myapp",['ngResource']);

//for cacheFactory service
app.factory('mycache',function($cacheFactory){
 return $cacheFactory('mycache', {capacity:3});		
});

app.controller("maincontrol",function($scope,mycache,$compile,$parse,$locale){
   $scope.addtocache=function(key,value){
  return mycache.put(key,value);
   };

   $scope.raedfromcache=function(key){
 return  mycache.get(key);
   };

   $scope.getcachestats=function(){
  return mycache.info();
     };

// for compile service
$scope.appelementtodiv=function(markup){
 return $compile(markup)($scope).appendTo(angular.element("div"));
 };

//for parse service
 var fn=$parse('1+2');
 console.log(fn());

 //example 2
 var getter=$parse('event.name');
 var context1={event :{name:'angular boot camp'}};
  var context2={event :{name:'boot camp'}};

  console.log(getter(context1));
  console.log(getter(context2));

  //example 3 second parameter takes prefrence
  console.log(getter(context2,context1));

//example 4
 var setter=getter.assign;
 setter(context2,'code review');

 console.log(context2.event.name);

 //locale service example
 console.log($locale);
 $scope.mydate=Date.now();
 $scope.myformat=$locale.DATETIME_FORMATS.fullDate;

 //exception handler
//console.log(exception.message);
});