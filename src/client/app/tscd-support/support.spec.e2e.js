/* jshint  -W030, -W117 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

describe('E2E: Support >>>', function () {
    beforeEach(function () {
        browser.get('/support');
    });

    it('The page has got "Support" in its <title>.', function () {
        expect(browser.getTitle()).to.eventually.contain('Support');
    });

    it('The view header should say "Support".', function () {
        expect(element(by.css('.page-header')).getText()).to.eventually.contain('Support');
    });
});
