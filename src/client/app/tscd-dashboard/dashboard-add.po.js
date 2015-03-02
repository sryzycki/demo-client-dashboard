/* jshint -W117 */
module.exports = function() {
    var self = this;

    this.mockName = 'Chewy stuff';

    this.showListBtn = element(by.partialButtonText('Back'));
    this.nameInput = element(by.id('name'));
    this.descriptionInput = element(by.id('description'));
    this.domainsInput = element(by.id('domains'));
    this.passwordInput = element(by.id('adminPassword'));
    this.submitBtn = element(by.css('.btn-success'));

    this.populateAndSubmitForm = function(name) {
        if (name && name.length) {
            self.mockName = name;
        }

        self.nameInput.sendKeys(self.mockName);
        // Remove all spaces and lowercase before using as a domain name.
        self.domainsInput.sendKeys(self.mockName.toLowerCase().replace(/\s+/g, ''));
        self.passwordInput.sendKeys('prototypepassword');

        self.submitBtn.click();
    };

    this.get = function() {
        browser.get('/add');
    };
};
