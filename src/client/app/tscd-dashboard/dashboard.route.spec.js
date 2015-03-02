/* jshint -W117, -W030 */
describe('Unit: Dashboard Routes', function () {
    beforeEach(function() {
        module('tscd.dashboard', bard.fakeToastr);
        bard.inject('$rootScope', '$location', '$state', '$httpBackend', '$templateCache');
    });

    describe('State "dashboard.list" ...', function () {
        var view = 'app/tscd-dashboard/dashboard-list.html';

        beforeEach(function() {
            $templateCache.put(view, '');
            $httpBackend.when('GET', '/api/v1/projects').respond(200);
            $httpBackend.flush();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Should load the List view when accessing / url.', function() {
            $location.path('/');
            $rootScope.$apply();

            expect($state.current.controller).to.equal('DashboardListController');
        });

        it('Should load the List view when accessing invalid url.', function() {
            $location.path('/invalid/random-route');
            $rootScope.$apply();

            expect($state.current.controller).to.equal('DashboardListController');
        });

        it('Should have Dashboard List view html assigned to it.', function () {
            expect($state.get('dashboard.list').templateUrl).to.equal(view);
        });
    });
});
