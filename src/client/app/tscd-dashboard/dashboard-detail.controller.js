(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .controller('DashboardDetailController', DashboardDetailController);

    function DashboardDetailController($log, projectResource, ProjectsService, $state) {
        var vm = this;
        vm.project = {};
        vm.remove = remove;
        vm.edit = edit;
        vm.isEdited = false;
        vm.save = save;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            $log.info('Activated Dashboard detail View');

            getProject();
        }

        function getProject() {
            vm.project = projectResource;

            return vm.project;
        }

        function remove() {
            ProjectsService.delete({projectId: projectResource.id});

            $state.go('dashboard.list', {}, {reload: true});
        }

        function edit() {
            vm.isEdited = true;
        }

        function save() {
            vm.isEdited = false;
        }
    }
})();
