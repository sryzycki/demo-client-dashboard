/* jshint -W117 */
module.exports = function() {
    this.addBtn = element(by.css('.btn-primary'));
    this.tblRows = element.all(by.repeater('item in vm.projects'));

    this.get = function() {
        browser.get('/dashboard/list');
    };
};
