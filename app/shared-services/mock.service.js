(function() {
    'use strict';

    angular
        .module('app')
        .factory('mockService', mockService);
    
    mockService.$inject = [];

    function mockService() {
        var service = {
            generateTomatoes: generateTomatoes
        };

        return service;

        function generateTomatoes(limit) {
            var tomatoes = [];
            var colors = [
                {ID: 1, Title: "Green", ColorCode: "#2c973e"}, 
                {ID: 2, Title: "Yellow", ColorCode: "#ffe102"}, 
                {ID: 3, Title: "Red", ColorCode: "#ff6347"}, 
                {ID: 4, Title: "Brown", ColorCode: "#8b4513"}
            ];
            var seasons = [
                {ID: 1, Title: "Spring"}, 
                {ID: 2, Title: "Summer"}, 
                {ID: 3, Title: "Fall"}, 
                {ID: 4, Title: "Winter"}
            ];
            var ounces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var picked = [true, false];
            
            for (let i= 0; i < limit; i++) {
                tomatoes.push({
                    "ID": parseInt(_.uniqueId()),
                    "season": _.sample(seasons),
                    "picked": _.sample(picked),
                    "color": _.sample(colors),
                    "ounces": _.sample(ounces)
                });
            }
            
            return JSON.stringify(tomatoes);
        }
    }
})(); 