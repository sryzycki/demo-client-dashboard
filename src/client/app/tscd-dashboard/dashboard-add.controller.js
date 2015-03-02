(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardAddController', DashboardAddController);

    function DashboardAddController($log, $location, ProjectsService) {
        var vm = this;
        vm.project = {};
        vm.add = add;
        vm.goToList = goToList;
        vm.formDisabled = false;
        vm.alerts = [];
        vm.closeAlert = closeAlert;
        vm.resourceResponse = 'Resource response here...'; // Debug.

        activate();

        //////////////////////////////////////////////////

        /* This function activates the controller. */
        function activate() {
            $log.info('Activated Dashboard add View');
        }

        /* This function handles form submit event. */
        function add() {
            if (vm.form.$valid) {
                console.log('DashboardAddController - Adding a new project...');
                // Disable form controls.
                vm.formDisabled = true;

                // Prepare the data.
                var retouchedFormData = retouchFormData(vm.project);
                // Post the data.
                ProjectsService
                    .save(retouchedFormData)
                    .$promise
                    .then(
                    // When success...
                    function(response) {
                        goToNewProject(response);

                        vm.resourceResponse = response;
                    },
                    // When error...
                    function(response) {
                        // Enable form controls.
                        vm.formDisabled = false;
                        // Reset alerts list.
                        vm.alerts = [];
                        // Add alerts.
                        if (response.status === 404 || response.status === 500) {
                            var errors = [
                                {
                                    reason: response.status,
                                    message: response.status + ': ' + response.data
                                }
                            ];
                            addAlert(errors);
                        } else {
                            addAlert(response.data.errors);
                        }

                        vm.resourceResponse = response;
                    }
                );
            }
        }

        /**
         * This function does necessary form data object amends.
         *
         * @param {object} formObj
         * @return {object} form Form data object that has a "project" property
         * that contains all the data submited.
         */
        function retouchFormData(formObj) {
            var formSubmited = angular.copy(formObj);
            var form = {};
            // Turn the {String}.domains into {Object}.domains.
            formSubmited.domains = [{name: formObj.domains + '.tstr.io'}];
            // Create an API specified object.
            form = {
                project: formSubmited
            };

            return form;
        }

        /* This function loads List view. */
        function goToList() {
            $location.path('/list');
        }

        /* This function loads Detail view.
         *
         * @param {object} project
         */
        function goToNewProject(project) {
            $location.path('/detail/' + project.id);
        }

        /**
         * Add alerts.
         *
         * @param {array} errors
         */
        function addAlert(errors) {
            console.log(errors);

            angular.forEach(errors, function(error) {
                this.push({type: 'danger', msg: error.message});
            }, vm.alerts);
        }

        /* This function removes the alert from list of alerts. */
        function closeAlert(index) {
            vm.alerts.splice(index, 1);
        }

        /* This function completely resets the form state and model. */
        function resetForm() {
            vm.form.$setPristine();
            vm.form.$setUntouched();
            vm.project = {};
        }
    }
})();
