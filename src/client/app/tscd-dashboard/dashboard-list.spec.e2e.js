/* jshint -W117 */
describe('E2E: Dashboard List >>>', function () {
    // List view.
    var addBtn = element(by.css('.btn-primary'));
    // Add view.
    var nameInput = element(by.id('name'));
    var descriptionInput = element(by.id('description'));
    var domainsInput = element(by.id('domains'));
    var passwordInput = element(by.id('adminPassword'));
    var submitBtn = element(by.css('.btn-success'));

    beforeEach(function () {
        browser.get('/');
    });

    it('The page has got "Dashboard list" in its <title>.', function () {
        expect(browser.getTitle()).toContain('Dashboard list');
    });

    it('Should have "add" button.', function () {
        expect(addBtn.isPresent()).toBe(true);
    });

    it('Should show added project on the list.', function () {
        addBtn.click();

        nameInput.sendKeys('ChewyStuff');
        domainsInput.sendKeys('haribo');
        passwordInput.sendKeys('haribopassw');

        submitBtn.click();

        expect(element.all(by.repeater('item in vm.projects')).last().getText())
            .toContain('ChewyStuff');
    });
});
