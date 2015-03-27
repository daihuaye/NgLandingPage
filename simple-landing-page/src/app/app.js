angular.module( 'vetjoy', [
    'templates-app',
    'templates-common',
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'vetjoy.home',
    'vetjoy.landingPage'
])

.config([
    '$urlRouterProvider',
    '$analyticsProvider',
    '$locationProvider',
function myAppConfig (
    $urlRouterProvider,
    $analyticsProvider,
    $locationProvider
){
    $urlRouterProvider.otherwise('/home');
    $analyticsProvider.firstPageview(false);
    $analyticsProvider.withAutoBase(false);
}])

.run(function run(){
})

.controller('AppCtrl', function AppCtrl ($scope) {

});