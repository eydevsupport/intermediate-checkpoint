angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './app/tomato-dashboard/tomato-dashboard.html',
            controller: 'TomatoDashboardController',
            controllerAs: 'vm'
        })
}]);
