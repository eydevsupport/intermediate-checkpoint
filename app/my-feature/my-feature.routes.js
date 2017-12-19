angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './my-feature/my-feature.html',
            controller: 'MyFeatureController'
        })
}]);
