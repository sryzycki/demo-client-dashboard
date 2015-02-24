var gulpConfig = require('./gulp.config')();

exports.config = {
    framework: 'mocha',
    // Manually confirm the seleniumServerJar path.
    // This is needed if you want GulpJS to
    // automatically start the server before tests.
    //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:' + gulpConfig.defaultPort,
    // Gulp task doesn't needs this, but CLI does.
    specs: gulpConfig.scenarios,

    //multiCapabilities: [
    //    {
    //        browserName: 'firefox'
    //    },
    //    {
    //        browserName: 'chrome'
    //    }
    //]

    mochaOpts: {
        reporter: 'spec',
        timeout: 10000
    }
};
