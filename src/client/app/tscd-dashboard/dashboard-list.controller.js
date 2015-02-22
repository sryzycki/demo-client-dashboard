(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardListController', DashboardListController);

    function DashboardListController(logger, projectsResource) {
        var vm = this;
        vm.projects = {};

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard list View');

            getProjects();
        }

        function getProjects() {
            vm.projects = projectsResource;

            return vm.projects;
        }
    }
})();
