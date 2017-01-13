app.controller('mainController', function($scope, $route, mainFactory){
    $scope.sites = [];
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
})
