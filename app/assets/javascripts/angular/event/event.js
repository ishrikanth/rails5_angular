var app = angular.module('angularExample');
app.factory('Event',['$resource',function($resource){
	return $resource('/api/events/:id.json',{id: '@id'});
}]);

app.factory('Event', ['$resource', function($resource) {
  return $resource('/api/events/:id.json', { id: '@id' }, {
    search: {
      method: 'GET',
      isArray: true,
      url: '/api/events/search.json',
      params: {
        query: '@query'
      }
    }
  });
}]);

app.factory('Event',['$resource', function($resource){
 return $resource('/api/events/:id.json', { id: '@id' }, {
    delete: { method: 'DELETE' }
});
   
}]);

app.factory('Event', ['$resource', function($resource) {
  return $resource('/api/events/:id.json', { id: '@id' }, {
    update: { method: 'PUT' }
    
  });
}]);

app.factory('Event', ['$resource', function($resource) {
  return $resource('/api/events/:id.json', { id: '@id' }, {
      sort: {
      method: 'GET',
      isArray: true,
      url: '/api/events.json'
    }
    
  });
}]);