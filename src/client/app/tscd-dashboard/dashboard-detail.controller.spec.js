/* jshint -W117, -W030 */
describe('Unit: DashboardDetailController >>>', function() {
    var controller;
    var projectResource = mockData.getMockProjects()[0]; // Get first project.

    beforeEach(function() {
        bard.appModule('tscd.dashboard');
        bard.inject('$controller', '$rootScope', '$httpBackend');
    });

    beforeEach(function() {
        controller = $controller('DashboardDetailController', {
            projectResource: projectResource
        });
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('The controller should be defined.', function() {
        expect(controller).to.be.defined;
    });

    describe('The project', function() {
        it('should be called "Prototype X".', function() {
            expect(controller.project.name).to.equal('Prototype X');
        });
    });
});
