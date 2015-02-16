(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    function SidebarController($state, routerHelper) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.navRoutes = [];
        vm.isCurrent = isCurrent;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            getNavRoutes();
        }

        // Filter through the states and return
        // only the ones that have nav settings
        // object attached.
        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();
