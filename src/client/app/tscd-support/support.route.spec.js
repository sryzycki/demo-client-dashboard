/* jshint -W117, -W030 */
describe('Unit: Support Routes', function () {
    describe('State "support" ...', function () {
        var view = 'app/tscd-support/support.html';

        beforeEach(function() {
            module('tscd.support', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Should load the Support view when accessing /support url.', function() {
            $location.path('/support');
            $rootScope.$apply();

            expect($state.current.controller).to.equal('SupportController');
        });

        it('Should have Support view html assigned to it.', function () {
            expect($state.get('support').templateUrl).to.equal(view);
        });
    });
});
