/* jshint -W117 */
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
        expect(browser.getTitle()).toContain('Dashboard list');
    });

    it('Should have "add" button.', function () {
        expect(dashboardList.addBtn.isPresent()).toBe(true);
    });

    it('Should show added project on the list.', function () {
        dashboardList.addBtn.click();

        dashboardAdd.nameInput.sendKeys('ChewyStuff');
        dashboardAdd.domainsInput.sendKeys('haribo');
        dashboardAdd.passwordInput.sendKeys('haribopassw');

        dashboardAdd.submitBtn.click();

        expect(dashboardList.tblRows.last().getText()).toContain('ChewyStuff');
    });
});
