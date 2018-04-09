app.factory("eventservice",function($resource){
	var resource = $resource('routing/:id',{id:'@id'});
    return {
           getEvent : function()
           {
           return resource.get({id:1});
           }
    };
});