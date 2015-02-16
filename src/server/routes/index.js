module.exports = function(app) {
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get('/api/projects', getProjects);
    app.get('/api/projects/y7505d54-75b4-431b-adb2-eb6b9e546013', getProjects1);
    app.get('/api/projects/y7505d54-75b4-431b-adb2-eb6b9e546014', getProjects2);
    app.get('/api/projects/y7505d54-75b4-431b-adb2-eb6b9e546015', getProjects3);

    //////////////////////////////////////////////////

    function getProjects(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects.json');
        res.send(json);
    }

    function getProjects1(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects1.json');
        res.send(json);
    }

    function getProjects2(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects2.json');
        res.send(json);
    }

    function getProjects3(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'projects3.json');
        res.send(json);
    }
};
