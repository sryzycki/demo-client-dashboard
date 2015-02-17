(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardAddController', DashboardAddController);

    function DashboardAddController(logger, ProjectsService) {
        var vm = this;
        vm.project = getEmptyProject();
        vm.add = add;
        vm.reset = reset;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard add View');
        }


        function getEmptyProject() {
            var project = {
                name: '',
                domainPrefix: '',
                adminPassword: ''
            }

            return project;
        }


        function add() {
            console.log(vm.project);

            if (vm.form.$valid) {
                // Submit as normal.
                console.log('DashboardAddController - Adding a new project...');
                ProjectsService.save(vm.project);
            } else {
                console.log('DashboardAddController - Form invalid...');
            }
        }


        function reset() {

        }
    }
})();
