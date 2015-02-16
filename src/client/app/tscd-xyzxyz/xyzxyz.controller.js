(function () {
    'use strict';

    angular
        .module('tscd.xyzxyz')
        .controller('XyzxyzController', XyzxyzController);

    function XyzxyzController($q, dataservice, logger) {
        var vm = this;
        vm.title = 'Xyzxyz';

        activate();

        //////////////////////////////////////////////////

        function activate() {
            logger.info('Activated Xyzxyz View');
        }
    }
})();
