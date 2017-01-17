app.controller('mainController',
['$scope', '$route', '$routeParams', '$location', 'mainFactory',
function($scope, $route, $routeParams, $location, mainFactory){
    $scope.sites = [];
    if($routeParams.id){
        mainFactory.get($routeParams.id, function(data){
            $scope.site = data;
        })
    }
    mainFactory.index(function(data){
        $scope.sites = data;
    })
    $scope.addLocation = function(){
        mainFactory.addLocation($scope.newSite);
        $scope.newSite = {};
        $route.reload();
    }
    $scope.deleteLocation = function(_id){
        mainFactory.deleteLocation(_id)
        $route.reload();
    }
    $scope.editLocation = function(_id){
        mainFactory.editLocation(_id, $scope.site);
        $location.url('/config')
    }
}]);
