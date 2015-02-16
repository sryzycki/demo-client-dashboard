(function () {
    'use strict';

    angular
        .module('tscd.dashboard')
        .factory('DashboardService', DashboardService);

    function DashboardService($http) {
        var service = {
            getProjects: getProjects
        };

        return service;

        //////////////////////////////////////////////////

        function getProjects(projectId) {
            return $http
                .get(getResourcePath(projectId))
                .then(getProjectsComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getProjects')(message);
                    $location.url('/');
                });

            function getResourcePath(projectId) {
                var path = '/api/projects';

                if (projectId) {
                    path = path + '/' + projectId;
                }

                return path;
            }

            function getProjectsComplete(data, status, headers, config) {
                return data.data;
            }
        }
    }
})();
