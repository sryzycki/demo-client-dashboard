(function() {
    'use strict';

    angular
        .module('tscd.dashboard')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/list');
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    abstract: true,
                    url: '/',
                    templateUrl: 'app/tscd-dashboard/dashboard.html',
                    resolve: {
                        projectsService: 'ProjectsService'
                    }
                }
            },
            {
                state: 'dashboard.list',
                config: {
                    url: 'list',
                    templateUrl: 'app/tscd-dashboard/dashboard-list.html',
                    resolve: {
                        /* @ngInject */
                        projectsResource: function(projectsService) {
                            // Return the projects collection data promise.
                            return projectsService.query().$promise;
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
                    url: 'detail/:detailId',
                    templateUrl: 'app/tscd-dashboard/dashboard-detail.html',
                    resolve: {
                        /* @ngInject */
                        projectResource: function(projectsService, $stateParams) {
                            // Extract customer ID from $stateParams.
                            var projectId = $stateParams.detailId;
                            // Return the project data promise.
                            return projectsService.get({projectId: projectId}).$promise;
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
                    url: 'add',
                    templateUrl: 'app/tscd-dashboard/dashboard-add.html',
                    controller: 'DashboardAddController',
                    controllerAs: 'vm',
                    title: 'Dashboard add'
                }
            }
        ];
    }
})();
