/* jshint -W117, -W030 */
describe('Unit: SupportController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('tscd.support');
        bard.inject('$controller', '$rootScope');
    });

    beforeEach(function() {
        controller = $controller('SupportController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('The controller should be defined.', function() {
        expect(controller).to.be.defined;
    });
});
