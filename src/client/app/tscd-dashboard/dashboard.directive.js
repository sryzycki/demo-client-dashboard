(function() {
    'use strict';

    angular
        .module('tscd.dashboard')
        .directive('tscdEnsureUnique', tscdEnsureUnique);

    function tscdEnsureUnique($q, $timeout) {
        // Validates an input field. Checks if the passed in
        // value is unique or already taken.
        //
        // Usage:
        //  <input type="text" name="name" ng-model="obi.name" tscd-ensure-unique="name">
        var directive = {
            require: 'ngModel',
            link: link
        };

        return directive;

        //////////////////////////////////////////////////

        function link(scope, ele, attrs, ctrl) {
            // List of taken domains.
            var domains = ['obi-x', 'obi-y', 'obi-z'];

            ctrl.$asyncValidators.unique = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty model valid
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function() {
                    // Mock a delayed response
                    if (domains.indexOf(modelValue) === -1) {
                        // The username is available
                        def.resolve();
                    } else {
                        def.reject();
                    }
                }, 2000);

                return def.promise;
            };
        }
    }
})();
