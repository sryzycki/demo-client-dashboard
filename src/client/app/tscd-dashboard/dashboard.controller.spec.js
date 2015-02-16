/* jshint -W117, -W030 */
describe('Unit: DashboardController >>>', function() {
    var controller;
    var obis = mockData.getMockObis();

    beforeEach(function() {
        bard.appModule('tscd.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'DashboardService');
    });

    beforeEach(function () {
        sinon.stub(DashboardService, 'getObis').returns($q.when(obis));
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('The controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after being activated', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('Dashboard');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have obis', function () {
                expect(controller.obis).to.not.be.empty;
            });

            it('should have at least 1 obi', function () {
                expect(controller.obis).to.have.length.above(0);
            });
        });
    });
});
