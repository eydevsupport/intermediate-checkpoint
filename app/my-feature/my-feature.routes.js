angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './app/my-feature/my-feature.html',
            controller: 'MyFeatureController'
        })
}]);
