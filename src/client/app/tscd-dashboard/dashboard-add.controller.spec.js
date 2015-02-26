/* jshint -W117, -W030 */
describe('Unit: DashboardAddController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('tscd.dashboard');
        bard.inject('$controller', '$rootScope');
    });

    beforeEach(function() {
        controller = $controller('DashboardAddController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('The controller should be defined.', function() {
        expect(controller).to.be.defined;
    });
});
