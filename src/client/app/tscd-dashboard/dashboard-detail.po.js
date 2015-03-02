/* jshint -W117 */
module.exports = function() {
    this.deleteBtn = element(by.buttonText('Destroy your obi'));
    this.tbl = element(by.css('.project-details'));
    this.projectName = element(by.css('.project-details')).element(by.binding('project.name'));
};
