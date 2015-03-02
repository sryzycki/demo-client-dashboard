(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    function exception($log) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(reason) {
                $log.error(message, reason);
            };
        }
    }
})();
