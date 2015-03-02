(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardListController', DashboardListController);

    function DashboardListController($log, projectsResource) {
        var vm = this;
        vm.projects = {};

        activate();

        //////////////////////////////////////////////////

        function activate() {
            $log.info('Activated Dashboard list View');

            getProjects();
        }

        function getProjects() {
            vm.projects = projectsResource;

            return vm.projects;
        }
    }
})();
