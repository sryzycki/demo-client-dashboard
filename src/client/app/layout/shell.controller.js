(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    function ShellController($timeout, config, logger) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();
