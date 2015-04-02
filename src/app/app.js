(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/projects/weekly-tech-news');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {
    });

}(angular.module("SimpleLandingPage", [
    'SimpleLandingPage.home',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router'
])));
