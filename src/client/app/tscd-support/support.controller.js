(function () {
    'use strict';

    angular
        .module('tscd.support')
        .controller('SupportController', SupportController);

    function SupportController(logger) {
        var vm = this;
        vm.title = 'Support';

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Support View');
        }
    }
})();
