(function() {
    'use strict';

    angular
        .module('app')
        .controller('MyFeatureController', MyFeatureController);
    
    MyFeatureController.$inject = [
        '$scope', 'restService', 'mockService'
    ];

    function MyFeatureController($scope, restService, mockService) {
        var vm = this;
        
        activate();

        function activate() {
            restService.getTomatoes().then(function(tomatoes) {
                // Process tomatoes
            })
        }
    }
})();
