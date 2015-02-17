(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardDetailController', DashboardDetailController);

    function DashboardDetailController(logger, projectPromise) {
        var vm = this;
        vm.project = {};

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard detail View');

            getProject();
        }

        function getProject() {
            vm.project = projectPromise;

            console.log(projectPromise);

            return vm.project;
        }
    }
})();
