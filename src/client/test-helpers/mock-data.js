/* jshint -W079 */
var mockData = (function() {
    return {
        getMockStates: getMockStates,
        getMockProjects: getMockProjects
    };

    //////////////////////////////////////////////////

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/tscd-dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockProjects() {
        return [
            {
                'id': '0',
                'createdAt': '2015-01-15T15:52:01+0000',
                'name': 'Prototype X',
                'description': 'Prototype X for this or that',
                'status': 1,
                'adminPassword': null,
                'domains': [
                    {
                        'name': 'xx.tstr.io',
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
            },
            {
                'id': '1',
                'createdAt': '2015-01-15T15:52:01+0000',
                'name': 'Prototype Y',
                'description': 'Prototype Y for this or that',
                'status': 1,
                'adminPassword': null,
                'domains': [
                    {
                        'name': 'yy.tstr.io',
                        'id': 'c99e6e9a-c279-887a-faa2-c28ca2491769'
                    }
                ],
                'backups': [],
                'events': [
                    {
                        'id': 'bbc34qw3-75b4-431b-adb2-eb6b9e546015',
                        'codeName': 'password',
                        'title': 'Password reset',
                        'createdAt': '2005-08-15T15:52:01+0000',
                        'finishedAt': null,
                        'completed': false,
                        'error': false,
                        'message': null
                    },
                    {
                        'id': 'abc34qw3-75b4-431b-adb2-eb6b9e546016',
                        'codeName': 'create',
                        'title': 'Project created',
                        'createdAt': '2005-08-15T15:52:01+0000',
                        'finishedAt': '2005-08-15T15:52:09+0000',
                        'completed': true,
                        'error': true,
                        'message': 'Unrecognized error'
                    }
                ]
            },
            {
                'id': '2',
                'createdAt': '2015-01-15T15:52:01+0000',
                'name': 'Prototype Z',
                'description': 'Prototype Z for this or that',
                'status': 1,
                'adminPassword': null,
                'domains': [
                    {
                        'name': 'zz.tstr.io',
                        'id': 'c99e6e9a-c279-887a-faa2-c28ca2491770'
                    }
                ],
                'backups': [],
                'events': [
                    {
                        'id': 'bbc34qw3-75b4-431b-adb2-eb6b9e546017',
                        'codeName': 'password',
                        'title': 'Password reset',
                        'createdAt': '2005-08-15T15:52:01+0000',
                        'finishedAt': null,
                        'completed': false,
                        'error': false,
                        'message': null
                    },
                    {
                        'id': 'abc34qw3-75b4-431b-adb2-eb6b9e546018',
                        'codeName': 'create',
                        'title': 'Project created',
                        'createdAt': '2005-08-15T15:52:01+0000',
                        'finishedAt': '2005-08-15T15:52:09+0000',
                        'completed': true,
                        'error': true,
                        'message': 'Unrecognized error'
                    }
                ]
            }
        ];
    }
})();
