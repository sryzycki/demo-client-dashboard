(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardAddController', DashboardAddController);

    function DashboardAddController(logger) {
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
            if (vm.form.$valid) {
                // Submit as normal.
                console.log('DashboardAddController - Adding a new project...');
            } else {
                console.log('DashboardAddController - Form invalid...');
            }

            console.log(vm.project);
        }


        function reset() {

        }
    }
})();
