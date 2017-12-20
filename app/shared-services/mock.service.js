(function() {
    'use strict';

    angular
        .module('app')
        .factory('mockService', mockService);
    
    mockService.$inject = [];

    function mockService() {
        var service = {
            generateTomatoes: generateTomatoes,
            getFarms: getFarms
        };

        return service;

        function generateTomatoes(limit) {
            var tomatoes = [];
            var tomato = {};
            var colors = [
                { ID: 1, Title: "Green", ColorCode: "#2c973e", Ordinal: 1 }, 
                { ID: 2, Title: "Yellow", ColorCode: "#ffe102", Ordinal: 2 }, 
                { ID: 3, Title: "Red", ColorCode: "#ff6347", Ordinal: 3 }, 
                { ID: 4, Title: "Brown", ColorCode: "#8b4513", Ordinal: 4 } 
            ];
            var seasons = [
                { ID: 1, Title: "Spring", Ordinal: 1 }, 
                { ID: 2, Title: "Summer", Ordinal: 2 }, 
                { ID: 3, Title: "Fall", Ordinal: 3 }, 
                { ID: 4, Title: "Winter", Ordinal: 4 }
            ];
            var ounces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var picked = [true, false];

            for (var i= 0; i < limit; i++) {
                tomato = {
                    "ID": parseInt(_.uniqueId()),
                    "season": _.sample(seasons),
                    "picked": _.sample(picked),
                    "color": _.sample(colors),
                    "ounces": _.sample(ounces),
                    "cost": costOfTomato(tomato.ounces),
                    "farm": _.sample(getFarms())
                };

                tomatoes.push(tomato);
            }
            
            return JSON.stringify(tomatoes);
        }

        function costOfTomato(ounces) {
            // Average cost of a tomato per pound is $3-4
            return _.round((ounces / 16) * _.sample([3, 4]), 2); 
        }

        function getFarms() {
            var farms = [
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Diavola House Orchard",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Frank Purple"
                    },
                    "Location": "Manor, GA",
                    "Established": "1952"
                }, 
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Tomato Plains",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Scott Phoenix"
                    },
                    "Location": "Murrayville, GA",
                    "Established": "1940"
                }, 
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Perry Family Farm",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Doug Perry"
                    },
                    "Location": "Sacramento, CA",
                    "Established": "1947"
                },
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Fresh Tomato Farm",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Lorraine Green"
                    },
                    "Location": "Palmetto, FL",
                    "Established": "1920"
                },
                {
                    "ID": parseInt(_.uniqueId()),
                    "Title": "Pacific Growers",
                    "Owner": {
                        "ID": parseInt(_.uniqueId()),
                        "Title": "Sandy Lively"
                    },
                    "Location": "Fort Myers, FL",
                    "Established": "1931"
                }
            ];
                        
            return farms;
        }
    }
})(); 