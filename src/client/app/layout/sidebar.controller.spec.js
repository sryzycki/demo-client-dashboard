/* jshint -W117, -W030 */
describe('Unit: SidebarController', function() {
    var controller;

    beforeEach(function() {
        module('app.layout', bard.fakeToastr);
        bard.inject('$controller', '$httpBackend', '$location',
                      '$rootScope', '$state', 'routerHelper');
    });

    beforeEach(function() {
        routerHelper.configureStates(mockData.getMockStates(), '/');
        controller = $controller('SidebarController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('Should have isCurrent() for / to return `current`.', function() {
        $location.path('/');
        expect(controller.isCurrent($state.current)).to.equal('current');
    });

    it('Should have isCurrent() for non route not return `current`.', function() {
        $location.path('/invalid');
        expect(controller.isCurrent({title: 'invalid'})).not.to.equal('current');
    });
});
