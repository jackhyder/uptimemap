app.controller('mainController', function($scope, $route, mainFactory){
    $scope.sites = [];
    mainFactory.index(function(data){
        console.log(data)
        $scope.sites = data;
    })
    $scope.addLocation = function(){
        mainFactory.addLocation($scope.newSite);
        $scope.newSite = {};
        $route.reload();
    }
})
