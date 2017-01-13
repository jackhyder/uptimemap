var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/status.html'
    })
    .when('/config', {
        templateUrl: 'partials/config.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
