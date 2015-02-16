/* jshint -W117, -W030 */
describe('Unit: SupportController >>>', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('tscd.support');
        bard.inject('$controller', '$rootScope', '$log');
    });

    beforeEach(function () {
        controller = $controller('SupportController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('The controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after being activated', function() {
            it('should have title of Support', function () {
                expect(controller.title).to.equal('Support');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
