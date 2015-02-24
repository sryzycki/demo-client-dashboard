var gulpConfig = require('./gulp.config')();

exports.config = {
    // Manually confirm the seleniumServerJar path.
    // This is needed if you want GulpJS to
    // automatically start the server before tests.
    //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:' + gulpConfig.defaultPort,
    specs: gulpConfig.scenarios

    //multiCapabilities: [
    //    {
    //        browserName: 'firefox'
    //    },
    //    {
    //        browserName: 'chrome'
    //    }
    //]
};
