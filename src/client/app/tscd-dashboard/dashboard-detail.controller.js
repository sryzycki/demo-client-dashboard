(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardDetailController', DashboardDetailController);

    function DashboardDetailController(logger, promiseProject) {
        var vm = this;
        vm.project = {};

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard detail View');

            getProject();
        }

        function getProject() {
            vm.project = promiseProject;

            console.log(promiseProject);

            return vm.project;
        }
    }
})();
