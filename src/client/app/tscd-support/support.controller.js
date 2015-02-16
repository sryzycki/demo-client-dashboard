(function () {
    'use strict';

    angular
        .module('tscd.support')
        .controller('SupportController', SupportController);

    function SupportController($q, dataservice, logger) {
        var vm = this;
        vm.title = 'Support';

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Support View');
        }
    }
})();
