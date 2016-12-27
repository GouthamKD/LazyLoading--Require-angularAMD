
define(["angularAMD", "angular", "ui-router"], function (angularAMD) {

    var app = angular.module('app', ["ui.router"]);


    app.config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider)
        {
            $stateProvider
                .state("a", angularAMD.route({
                    url: "/a",
                    template:'<div>{{title}}</div>',
                         resolve: {
                        loadController: ['$q', '$stateParams',
                            function ($q, $stateParams)
                            {
                                var deferred = $q.defer();
                                require(['c1'], function () { deferred.resolve(); });
                                return deferred.promise;
                            }]
                    },
                    controllerProvider: function ($stateParams)
                    {
                        return 'DefaultCtrl';
                    },
                }))
                .state("b", angularAMD.route({
                    url: "/b",
                    template:'<div>{{title}}</div>',

                    resolve: {
                        loadController: ['$q', '$stateParams',
                            function ($q, $stateParams)
                            {
                                // get the controller name === here as a path to Controller_Name.js
                                // which is set in main.js path {}
                                //var controllerName = controllerNameByParams($stateParams);

                                var deferred = $q.defer();
                                require(['c2'], function () { deferred.resolve(); });
                                return deferred.promise;
                            }]
                    },
                    controllerProvider: function ($stateParams)
                    {
                        // get the controller name === here as a dynamic controller Name
                        //var controllerName = controllerNameByParams($stateParams);
                        return "otherCtrl";
                    },
                }));

            $urlRouterProvider
                .otherwise("/a");
        }
    ]);

    return angularAMD.bootstrap(app);
})
