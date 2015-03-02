(function () {
    'use strict';

    angular
        .module('tscd.projects')
        .factory('ProjectsService', ProjectsService);

    function ProjectsService($resource) {
        return $resource('/api/v1/projects/:projectId');
    }
})();
