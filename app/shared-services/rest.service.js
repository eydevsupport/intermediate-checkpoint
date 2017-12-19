(function() {
    'use strict';

    angular
        .module('app')
        .factory('restService', restService);
    
    restService.$inject = ['$http'];

    function restService($http) {
        var service = {
            getTomatos: getTomatos
        };

        return service;

        function getTomatos() {
            return $http({
                method: 'GET', 
                url: 'http://localhost:3000/tomatos'
            }).then(function(response) {
                return response.data;
            });
        }
    }
})();