angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../SiteAssets/angular/app/training-roadmap/training-roadmap.html',
            controller  : 'AppController'
        })
}]);
