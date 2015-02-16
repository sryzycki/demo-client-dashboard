(function() {
    'use strict';

    angular
        .module('tscd.support')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'support',
                config: {
                    url: '/support',
                    templateUrl: 'app/tscd-support/support.html',
                    controller: 'SupportController',
                    controllerAs: 'vm',
                    title: 'Support',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-support"></i> Support'
                    }
                }
            }
        ];
    }
})();
