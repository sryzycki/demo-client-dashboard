/* jshint -W117, -W030 */
describe('Unit: DashboardListController', function() {
    var controller;
    var projectsResource = mockData.getMockProjects();

    beforeEach(function() {
        bard.appModule('tscd.dashboard');
        bard.inject('$controller', '$rootScope', '$httpBackend');
    });

    beforeEach(function() {
        controller = $controller('DashboardListController', {
            projectsResource: projectsResource
        });
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('The controller should be defined.', function() {
        expect(controller).to.be.defined;
    });

    describe('The projects list', function() {
        it('should have 3 items.', function() {
            expect(controller.projects).to.have.length(3);
        });
    });
});
