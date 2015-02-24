/* jshint -W117 */
describe('E2E: Support >>>', function () {
    beforeEach(function () {
        browser.get('/support');
    });

    it('The page has got "Support" in its <title>.', function () {
        expect(browser.getTitle()).toContain('Support');
    });

    it('The view header should say "Support".', function () {
        expect(element(by.css('.page-header')).getText()).toContain('Support');
    });
});
