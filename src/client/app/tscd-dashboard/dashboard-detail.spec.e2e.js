/* jshint  -W030, -W117 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Require Page Objects.
var DashboardList = require('./dashboard-list.po.js');
var DashboardAdd = require('./dashboard-add.po.js');
var DashboardDetail = require('./dashboard-detail.po.js');

describe('E2E: Dashboard Detail >>>', function () {
    // Reference Page Objects.
    var dashboardList = new DashboardList();
    var dashboardAdd = new DashboardAdd();
    var dashboardDetail = new DashboardDetail();

    beforeEach(function () {
        dashboardAdd.get();
    });

    it('The page has got "Dashboard detail" in its <title>.', function () {
        dashboardAdd.populateAndSubmitForm();
        expect(browser.getTitle()).to.eventually.contain('Dashboard detail');
    });

    it('Should display the project\'s name.', function () {
        dashboardAdd.populateAndSubmitForm();
        expect(dashboardDetail.projectName.getText()).to.eventually.equal(dashboardAdd.mockName);
    });

    it('User can delete the project.', function() {
        var name = 'ToBeDeleted';
        dashboardAdd.populateAndSubmitForm(name);
        dashboardDetail.deleteBtn.click();
        browser.waitForAngular();

        expect(dashboardList.tbl.getText()).to.eventually.not.contain(name);
    });
});
