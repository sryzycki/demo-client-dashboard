(function () {
    'use strict';

    angular
        .module('tscd.support')
        .controller('SupportController', SupportController);

    function SupportController($log) {
        var vm = this;
        vm.title = 'Support';

        activate();

        //////////////////////////////////////////////////

        function activate() {
            $log.info('Activated Support View');
        }
    }
})();
