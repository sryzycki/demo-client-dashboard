/* jshint -W117, -W030 */
describe('Unit: ShellController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.layout');
        bard.inject('$controller', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('ShellController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('Should be created successfully.', function () {
        expect(controller).to.be.defined;
    });
});
