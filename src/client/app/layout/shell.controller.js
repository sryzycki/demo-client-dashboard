(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    function ShellController($log, config) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            $log.info(config.appTitle + ' loaded!', null);
        }
    }
})();
