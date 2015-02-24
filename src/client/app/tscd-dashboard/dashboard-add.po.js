/* jshint -W117 */
module.exports = function() {
    this.nameInput = element(by.id('name'));
    this.descriptionInput = element(by.id('description'));
    this.domainsInput = element(by.id('domains'));
    this.passwordInput = element(by.id('adminPassword'));
    this.submitBtn = element(by.css('.btn-success'));

    this.get = function() {
        browser.get('/dashboard/add');
    };
};
