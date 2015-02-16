/* jshint -W117, -W030 */
describe('xyzxyz routes', function () {
    describe('state', function () {
        var controller;
        var view = 'app/tscd-xyzxyz/xyzxyz.html';

        beforeEach(function() {
            module('tscd.xyzxyz', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state xyzxyz to url /xyzxyz', function() {
            expect($state.href('xyzxyz', {})).to.equal('/xyzxyz');
        });

        it('should map /xyzxyz route to xyzxyz View template', function () {
            expect($state.get('xyzxyz').templateUrl).to.equal(view);
        });

        it('of xyzxyz should work with $state.go', function () {
            $state.go('xyzxyz');
            $rootScope.$apply();
            expect($state.is('xyzxyz'));
        });
    });
});
