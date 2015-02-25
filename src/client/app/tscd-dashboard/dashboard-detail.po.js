/* jshint -W117 */
module.exports = function() {
    var self = this;

    self.deleteBtn = element(by.buttonText('Destroy your obi'));
    self.tbl = element(by.css('.project-details'));
    self.projectName = element(by.css('.project-details')).element(by.binding('project.name'));

    self.get = function() {
        browser.get('/dashboard/detail/y7505d54-75b4-431b-adb2-eb6b9e546013');
    };
};
