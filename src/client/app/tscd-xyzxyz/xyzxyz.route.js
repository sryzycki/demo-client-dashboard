(function() {
    'use strict';

    angular
        .module('tscd.xyzxyz')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'xyzxyz',
                config: {
                    url: '/xyzxyz',
                    templateUrl: 'app/tscd-xyzxyz/xyzxyz.html',
                    controller: 'XyzxyzController',
                    controllerAs: 'vm',
                    title: 'xyzxyz',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-xyzxyz"></i> Xyzxyz'
                    }
                }
            }
        ];
    }
})();
