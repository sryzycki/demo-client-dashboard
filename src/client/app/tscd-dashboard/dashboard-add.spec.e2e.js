/* jshint  -W030, -W117 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Require Page Objects.
var DashboardList = require('./dashboard-list.po.js');
var DashboardAdd = require('./dashboard-add.po.js');
var DashboardDetail = require('./dashboard-detail.po.js');

describe('E2E: Dashboard Add >>>', function () {
    // Reference Page Objects.
    var dashboardList = new DashboardList();
    var dashboardAdd = new DashboardAdd();
    var dashboardDetail = new DashboardDetail();

    beforeEach(function () {
        dashboardAdd.get();
    });

    it('The page has got "Dashboard add" in its <title>.', function () {
        expect(browser.getTitle()).to.eventually.contain('Dashboard add');
    });

    it('There is a back btn that goes to the projects list.', function () {
        dashboardAdd.showListBtn.click();

        expect(browser.getCurrentUrl()).to.eventually.contain('/dashboard/list');
    });

    it('User can add a project, find it on the list and view its details.', function () {
        dashboardAdd.populateAndSubmitForm();
        browser.waitForAngular();
        dashboardList.lastProjectDetailViewLink.click();

        expect(browser.getCurrentUrl()).to.eventually.contain('/dashboard/detail');
        expect(dashboardDetail.projectName.getText())
            .to.eventually.contain(dashboardAdd.mockName);
    });

    it('Domain name needs to be a-z 0-9.', function() {
        expect(false).to.be.ok;
    });
});
