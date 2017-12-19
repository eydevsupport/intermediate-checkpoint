(function() {
    'use strict';

    angular
        .module('app')
        .factory('mockService', mockService);
    
    mockService.$inject = [];

    function mockService() {
        var service = {
            generateTomatos: generateTomatos
        };

        return service;

        function generateTomatos(limit) {
            var tomatos = [];
            var colors = ["Green", "Yellow", "Orange", "Red", "Brown"];
            var ounces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var types = ["Ripe", "Immature", "Rotten"];
            var picked = [true, false];
            
            for (let i= 0; i < limit; i++) {
                tomatos.push({
                    "id": _.uniqueId(),
                    "type": _.sample(types),
                    "picked": _.sample(picked),
                    "color": _.sample(colors),
                    "ounces": _.sample(ounces)
                });
            }
            
            return JSON.stringify(tomatos);
        }
    }
})(); 