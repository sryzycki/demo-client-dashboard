(function() {
    'use strict';

    angular
        .module('tscd.dashboard')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/dashboard/list');
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    abstract: true,
                    url: '/dashboard',
                    templateUrl: 'app/tscd-dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'dashboard.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/tscd-dashboard/dashboard-list.html',
                    resolve: {
                        projectsResource: 'ProjectsService',
                        projectsPromise: function(projectsResource) {
                            // Return the projects collection data promise.
                            return projectsResource.query().$promise;
                        }
                    },
                    controller: 'DashboardListController',
                    controllerAs: 'vm',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    },
                    title: 'Dashboard list'
                }
            },
            {
                state: 'dashboard.detail',
                config: {
                    url: '/detail/:detailId',
                    templateUrl: 'app/tscd-dashboard/dashboard-detail.html',
                    resolve: {
                        projectsResource: 'ProjectsService',
                        projectPromise: function(projectsResource, $stateParams) {
                            // Extract customer ID from $stateParams.
                            var projectId = $stateParams.detailId;
                            // Return the project data promise.
                            return projectsResource.get({projectId: projectId}).$promise;
                        }
                    },
                    controller: 'DashboardDetailController',
                    controllerAs: 'vm',
                    title: 'Dashboard detail'
                }
            },
            {
                state: 'dashboard.add',
                config: {
                    url: '/add',
                    templateUrl: 'app/tscd-dashboard/dashboard-add.html',
                    controller: 'DashboardAddController',
                    controllerAs: 'vm',
                    title: 'Dashboard add'
                }
            }
        ];
    }
})();
