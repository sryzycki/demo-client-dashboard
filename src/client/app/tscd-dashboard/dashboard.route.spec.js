/* jshint -W117, -W030 */
describe('Unit: Dashboard Routes >>>', function () {
    describe('State "dashboard.list"', function () {
        var view = 'app/tscd-dashboard/dashboard-list.html';

        beforeEach(function() {
            module('tscd.dashboard', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
            $httpBackend.when('GET', '/api/projects').respond(200);
            $httpBackend.flush();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be mapped to url /dashboard-list.', function() {
            expect($state.href('dashboard.list', {})).to.equal('/dashboard/list');
        });

        it('should have Dashboard List view html assigned to it.', function () {
            expect($state.get('dashboard.list').templateUrl).to.equal(view);
        });

        it('should be available through $state.go method.', function () {
            $state.go('dashboard.list');
        });
    });
});
