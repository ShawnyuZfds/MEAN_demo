'use strict';
angular.module('myApp', ['ui.router', 'ngRoute', 'controllers', 'directives',
        'services', 'ngResource', 'filters', 'pascalprecht.translate', 'ngAnimate'])

    .config(function ($routeProvider, $locationProvider, $stateProvider, $translateProvider) {
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "viewA": {
                        templateUrl: "home/home.html",
                        controller: 'homeController'
                    },
                    "viewB": {
                        template: "adfa"
                    }
                }
            })
            .state('home', {
                url: "/home",
                views: {
                    "viewA": {
                        templateUrl: "home/home.html",
                        controller: 'homeController'
                    },
                    "viewB": {
                        template: "adfa"
                    }
                }
            })
            .state('view', {
                url: "/view",
                views: {
                    "viewA": {
                        templateUrl: "view/view.html",
                        controller: 'viewController'
                    },
                    "viewB": {
                        template: "<a ui-sref='.list'>view.list</a><div ui-view></div>"
                    }
                }
            })
            .state('view.list', {
                url: "/list",
                template: "<p>home.list</p>"

            })
            .state('test', {
                url: "/test/:Uid",
                views: {
                    "viewA": {
                        templateUrl: "test/test.html",
                        controller: 'testController'
                    },
                    "viewB": {
                        template: "route1.viewB"
                    }
                }

            })
            .state('database', {
                url: "/database",
                views: {
                    "viewA": {
                        templateUrl: "database/database.html",
                        controller: 'dbController'
                    },
                    "viewB": {
                        template: "route1.viewB"
                    }
                }

            });
        $translateProvider
            .translations('en', {
                TITLE: 'Hello',
                PARA: 'This is a paragraph.',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_DE: 'german'
            })
            .translations('de', {
                TITLE: 'Hallo',
                PARA: 'Dies ist ein Paragraph.',
                BUTTON_LANG_EN: 'englisch',
                BUTTON_LANG_DE: 'deutsch'
            });
        //setting default language
        $translateProvider.preferredLanguage('en');
        // .otherwise({redirectTo: '/'})


        // $routeProvider.when('/', {
        // templateUrl : 'ad.html',
        // controller : 'adController'
        // })
        //
        // .when('/home/:name', {
        // templateUrl : 'home.html',
        // controller : 'homeController'
        // })
        //
        // .when('/view', {
        // templateUrl : 'view.html',
        // controller : 'viewController'
        // })
        //
        // .when('/edit', {
        // templateUrl : 'edit.html',
        // controller : 'editController'
        // })
        //
        // .when('/myModal', {
        // templateUrl : 'login.html',
        // controller : 'index'
        // });

        // $locationProvider.html5Mode(true);


        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        // $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
        // $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
        // $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        // $httpProvider.defaults.useXDomain = true;

    });