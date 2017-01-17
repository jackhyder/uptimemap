app.factory('mainFactory', function($http){
  var factory = {};
  factory.sites = [];
  factory.index = function(callback){
      $http.get('/sites/all').success(function(output){
          factory.sites = output;
          callback(output);
      })
  }
  factory.addLocation = function(site){
      $http.post('/site/add', site).success(function(data){
      })
  }
  factory.deleteLocation = function(id){
      $http.post('/site/delete', {data:id}).success(function(res){
      })
  }
  factory.editLocation = function(id, data){

      $http.post('site/edit/' + id, data).success(function(res){
      })
  }
  factory.get = function(id, callback){
      $http.get('/site/' + id).success(function(output){
          factory.site = output;
          callback(output);
      })
  }
  return factory;
})
