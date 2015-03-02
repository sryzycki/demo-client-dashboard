(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngMessages',
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.router',
            'ui.router'
        ]);
})();
