/* jshint  -W030, -W117 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Require Page Objects.
var DashboardList = require('./dashboard-list.po.js');
var DashboardAdd = require('./dashboard-add.po.js');

describe('E2E: Dashboard List >>>', function () {
    // Reference Page Objects.
    var dashboardList = new DashboardList();
    var dashboardAdd = new DashboardAdd();

    beforeEach(function () {
        dashboardList.get();
    });

    it('The page has got "Dashboard list" in its <title>.', function () {
        expect(browser.getTitle()).to.eventually.contain('Dashboard list');
    });

    it('Should have "add" button.', function () {
        expect(dashboardList.addBtn.isPresent()).to.be.ok;
    });

    it('Should show added project on the list.', function () {
        dashboardList.addBtn.click();
        dashboardAdd.populateAndSubmitForm();

        expect(dashboardList.lastProjectName.getText())
            .to.eventually.contain(dashboardAdd.mockName);
    });
});
