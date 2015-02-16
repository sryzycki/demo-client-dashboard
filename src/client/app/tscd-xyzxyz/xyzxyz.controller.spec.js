/* jshint -W117, -W030 */
describe('Unit: XyzxyzController >>>', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('tscd.xyzxyz');
        bard.inject('$controller', '$rootScope', '$log');
    });

    beforeEach(function () {
        controller = $controller('XyzxyzController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('The controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after being activated', function() {
            it('should have title of Xyzxyz', function () {
                expect(controller.title).to.equal('Xyzxyz');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
