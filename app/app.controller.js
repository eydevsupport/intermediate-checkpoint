(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);
    
    AppController.$inject = [
        '$scope'
    ];

    function AppController($scope) {
        var vm = this;
    }
})();
