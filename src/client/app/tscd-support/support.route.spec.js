/* jshint -W117, -W030 */
describe('Unit: Support Routes >>>', function () {
    describe('state', function () {
        var view = 'app/tscd-support/support.html';

        beforeEach(function() {
            module('tscd.support', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state support to url /support', function() {
            expect($state.href('support', {})).to.equal('/support');
        });

        it('should map /support route to support View template', function () {
            expect($state.get('support').templateUrl).to.equal(view);
        });

        it('of support should work with $state.go', function () {
            $state.go('support');
            $rootScope.$apply();
            expect($state.is('support'));
        });
    });
});
