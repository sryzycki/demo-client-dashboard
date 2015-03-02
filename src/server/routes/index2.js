module.exports = function(app) {
    /**
     *
     *
     * ProjectsRepository class deals with projects persistence
     *
     *
     */
    function ProjectsRepository() {
        this.projects = [];
    }

    /**
     * Find a project by id
     * Param: id of the project to find
     * Returns: the project corresponding to the specified id
     */
    ProjectsRepository.prototype.find = function (id) {
        var project = this.projects.filter(function(item) {
            return item.id === id;
        })[0];

        if (null == project) {
            throw new Error('project not found');
        }

        return project;
    };

    /**
     * Find the index of a project
     * Param: id of the project to find
     * Returns: the index of the project identified by id
     */
    ProjectsRepository.prototype.findIndex = function (id) {
        var index = null;

        this.projects.forEach(function(item, key) {
            if (item.id === id) {
                index = key;
            }
        });

        if (null == index) {
            throw new Error('project not found');
        }

        return index;
    };

    /**
     * Retrieve all projects
     * Returns: array of projects
     */
    ProjectsRepository.prototype.findAll = function () {
        return this.projects;
    };

    /**
     * Retrieve a new project id
     * Returns: new project id string
     */
    ProjectsRepository.prototype.getId = function() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = 'y7505d54-75b4-431b-adb2-';
        for (var i = 12; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
    };

    /**
     * Save a project (create or update)
     * Param: project the project to save
     */
    ProjectsRepository.prototype.save = function (project) {
        if (project.id === null) {
            project.id = projectsRepository.getId();
            this.projects.push(project);
        } else {
            var index = this.findIndex(project.id);
            this.projects[index] = project;
        }
    };

    /**
     * Remove a project
     * Param: id the of the project to remove
     */
    ProjectsRepository.prototype.remove = function (id) {
        var index = this.findIndex(id);
        this.projects.splice(index, 1);
    };

    /**
     *
     *
     * API
     *
     *
     */
    var projectsRepository = new ProjectsRepository();

    /**
     * HTTP GET /api/v1/projects
     * Returns: array of projects in JSON format
     */
    app.get('/api/v1/projects', function (request, response) {
        response.json(projectsRepository.findAll());
    });

    /**
     * HTTP GET /api/v1/projects/:projectId
     * Param: :id is the unique identifier of the project you want to retrieve
     * Returns: the project with the specified :id in JSON format
     * Error: 404 HTTP code if the project doesn't exists
     */
    app.get('/api/v1/projects/:projectId', function (request, response) {
        var projectId = request.params.projectId;

        try {
            response.json(projectsRepository.find(projectId));
        } catch (exeception) {
            response.sendStatus(404);
        }
    });

    /**
     * HTTP POST /api/v1/projects
     * Body Param: JSON object that contains a project property
     * Returns: 200 HTTP code
     */
    app.post('/api/v1/projects', function (request, response) {
        var project = request.body.project;

        var projectToSave = {
            'id': null,
            'createdAt': '2015-01-15T15:52:01+0000',
            'name': project.name,
            'description': project.description || '',
            'status': 1,
            'adminPassword': project.adminPassword,
            'domains': [
                {
                    'name': project.domains[0].name || 'default.domain.example.com',
                    'id': 'c99e6e9a-c279-887a-faa2-c28ca2491768'
                }
            ],
            'backups': [],
            'events': [
                {
                    'id': 'bbc34qw3-75b4-431b-adb2-eb6b9e546013',
                    'codeName': 'password',
                    'title': 'Password reset',
                    'createdAt': '2005-08-15T15:52:01+0000',
                    'finishedAt': null,
                    'completed': false,
                    'error': false,
                    'message': null
                },
                {
                    'id': 'abc34qw3-75b4-431b-adb2-eb6b9e546014',
                    'codeName': 'create',
                    'title': 'Project created',
                    'createdAt': '2005-08-15T15:52:01+0000',
                    'finishedAt': '2005-08-15T15:52:09+0000',
                    'completed': true,
                    'error': true,
                    'message': 'Unrecognized error'
                }
            ]
        };

        var responseError = {
            'error': {
                'code': 400,
                'message': 'Bad Request'
            },
            'errors': [
                //{
                //
                //    'errorCode': 'validationError',
                //    'message': '<<field>>: This property is required.'
                //},
                {
                    'errorCode': 'domainValidationError',
                    'message': 'Domain <<domainName>> is already taken.'
                }
                //{
                //    'errorCode': 'subscriptionProjectsLimit',
                //    'message': 'You have reached your projects limit. Please upgrade your subscription.'
                //}
            ]
        };

        setTimeout(function() {
            projectsRepository.save(projectToSave);
            response.status(201).send(projectToSave);
            //response.status(400).send(responseError);
            //response.sendStatus(500);
            //response.sendStatus(404);
        }, 1000);
    });

    /**
     * HTTP PUT /projects/
     * Param: :id the unique identifier of the project you want to update
     * Body Param: the JSON project you want to update
     * Returns: 200 HTTP code
     * Error: 404 HTTP code if the project doesn't exists
     */
    //app.put('/projects/:id', function (request, response) {
    //    var project = request.body;
    //    var taskId = request.params.id;
    //    try {
    //        var persistedTask = projectsRepository.find(taskId);
    //        projectsRepository.save({
    //            taskId: persistedTask.taskId,
    //            title: project.title || persistedTask.title,
    //            description: project.description || persistedTask.description,
    //            dueDate: project.dueDate || persistedTask.dueDate,
    //            status: project.status || persistedTask.status
    //        });
    //        response.sendStatus(200);
    //    } catch (exception) {
    //        response.sendStatus(404);
    //    }
    //});

    /**
     * HTTP DELETE /api/v1/projects/:id
     * Param: :id the unique identifier of the project you want to delete
     * Returns: 202 HTTP code - accepted for processing, check events for progress info
     * Error: 401 unauthorised, 403 forbidden and 404 not found HTTP codes
     *        e.g. { 'error': { 'code': 404, 'message': 'Not Found' } }
     */
    app.delete('/api/v1/projects/:projectId', function (request, response) {
        try {
            var projectId = request.params.projectId;

            projectsRepository.remove(projectId);
            response.sendStatus(200);
        } catch (exeception) {
            response.sendStatus(404);
        }
    });
};
