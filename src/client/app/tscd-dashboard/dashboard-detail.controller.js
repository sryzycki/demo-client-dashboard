(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardDetailController', DashboardDetailController);

    function DashboardDetailController(logger, projectPromise, ProjectsService) {
        var vm = this;
        vm.project = {};
        vm.destroy = destroy;
        vm.edit = edit;
        vm.isEdited = false;
        vm.save = save;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Dashboard detail View');

            getProject();
        }

        function getProject() {
            vm.project = projectPromise;

            return vm.project;
        }

        function destroy() {
            ProjectsService.delete({ projectId: projectPromise.id });
        }

        function edit() {
            vm.isEdited = true;
        }

        function save() {
            vm.isEdited = false;
        }
    }
})();
