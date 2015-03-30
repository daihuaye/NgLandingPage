/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider
        .state('home', {
            url: '/projects/:project',
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' },
            resolve: {
                project: function getProjects($stateParams, $state, EmailService) {
                    return EmailService
                            .registerForProject($stateParams.project)
                            .then(null, function () {
                                $state.go('404');
                            });
                }
            }
        })
        .state('404', {
            url: '/404',
            views: {
                "main": {
                    templateUrl: 'assets/404.html'
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleLandingPage.home", [
    'ui.router',
    'ngMessages',
    'SimpleLandingPage.service.email'
])));
