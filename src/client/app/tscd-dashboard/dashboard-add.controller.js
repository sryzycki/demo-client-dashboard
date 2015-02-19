(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardAddController', DashboardAddController);

    function DashboardAddController(logger, ProjectsService, $state) {
        var vm = this;
        vm.project = getEmptyProject();
        vm.add = add;
        vm.goToList = goToList;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard add View');
        }


        function getEmptyProject() {
            var project = {
                name: '',
                description: '',
                domains: '',
                adminPassword: ''
            }

            return project;
        }


        function add() {
            if (vm.form.$valid) {
                console.log('DashboardAddController - Adding a new project...');
                var processedForm = processForm(vm.project);
                ProjectsService.save(processedForm);

                // Ad hoc.
                $state.go('dashboard.list');
            } else {
                console.log('DashboardAddController - Form invalid...');
            }
        }


        // For the time being we accept only one domain per obi (e.g. "domains": "domain-name").
        // In the future, the form object will have an array of domains.
        function processForm(formObj) {
            var form = angular.copy(formObj);

            form.domains = [
                {
                    name: 'http://' + formObj.domains + '.tstr.io'
                }
            ];

            return form;
        }


        function goToList() {
            $state.go('dashboard.list');
        }
    }
})();
