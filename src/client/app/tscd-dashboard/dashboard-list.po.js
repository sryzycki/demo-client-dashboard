/* jshint -W117 */
module.exports = function() {
    var self = this;

    this.addBtn = element(by.css('.btn-primary'));
    this.tbl = element(by.css('.table'));
    this.tblRows = element.all(by.repeater('item in vm.projects'));
    this.tblLastRow = self.tblRows.last();
    this.lastProjectName = self.tblLastRow.element(by.binding('item.name'));
    this.lastProjectDetailViewLink = self.tblLastRow
        .element(by.css('.projects-table__show-details'));

    this.get = function() {
        browser.get('/list');
    };
};
