/* jshint -W079 */
var mockData = (function() {
    return {
        getMockStates: getMockStates,
        getMockObis: getMockObis
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

    function getMockObis() {
        return [
            {
                "id": "y7505d54-75b4-431b-adb2-eb6b9e546013",
                "createdAt": "2015-01-15T15:52:01+0000",
                "ownerId": "431bsa-75b4-431b-adb2-eb6b9e546013",
                "name": "Prototype X",
                "description": "Prototype X for this or that",
                "status": 1,
                "domainPrefix": "obi-x",
                "adminPassword": null,
                "events": [
                    {
                        "id": "bbc34qw3-75b4-431b-adb2-eb6b9e546013",
                        "codeName": "password",
                        "title": "Password reset",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "completed": false,
                        "error": false
                    },
                    {
                        "id": "abc34qw3-75b4-431b-adb2-eb6b9e546013",
                        "codeName": "create",
                        "title": "Project created",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "finishedAt": "2005-08-15T15:52:09+0000",
                        "completed": true,
                        "error": true,
                        "message": "Unrecognized error"
                    }
                ]
            },
            {
                "id": "y7505d54-75b4-431b-adb2-eb6b9e546014",
                "createdAt": "2015-01-15T15:52:01+0000",
                "ownerId": "431bsa-75b4-431b-adb2-eb6b9e546014",
                "name": "Prototype Y",
                "description": "Prototype Y for this or that",
                "status": 1,
                "domainPrefix": "obi-y",
                "adminPassword": null,
                "events": [
                    {
                        "id": "bbc34qw3-75b4-431b-adb2-eb6b9e546014",
                        "codeName": "password",
                        "title": "Password reset",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "completed": false,
                        "error": false
                    },
                    {
                        "id": "abc34qw3-75b4-431b-adb2-eb6b9e546014",
                        "codeName": "create",
                        "title": "Project created",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "finishedAt": "2005-08-15T15:52:09+0000",
                        "completed": true,
                        "error": true,
                        "message": "Unrecognized error"
                    }
                ]
            },
            {
                "id": "y7505d54-75b4-431b-adb2-eb6b9e546015",
                "createdAt": "2015-01-15T15:52:01+0000",
                "ownerId": "431bsa-75b4-431b-adb2-eb6b9e546015",
                "name": "Prototype Z",
                "description": "Prototype Y for this or that",
                "status": 1,
                "domainPrefix": "obi-z",
                "adminPassword": null,
                "events": [
                    {
                        "id": "bbc34qw3-75b4-431b-adb2-eb6b9e546015",
                        "codeName": "password",
                        "title": "Password reset",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "completed": false,
                        "error": false
                    },
                    {
                        "id": "abc34qw3-75b4-431b-adb2-eb6b9e546015",
                        "codeName": "create",
                        "title": "Project created",
                        "createdAt": "2005-08-15T15:52:01+0000",
                        "finishedAt": "2005-08-15T15:52:09+0000",
                        "completed": true,
                        "error": true,
                        "message": "Unrecognized error"
                    }
                ]
            }
        ];
    }
})();
