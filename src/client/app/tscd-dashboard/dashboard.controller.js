(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardController', DashboardController);

    function DashboardController(logger) {
        var vm = this;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard View');
        }
    }
})();
