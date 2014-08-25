angular.module( 'vetjoy', [
    'templates-app',
    'templates-common',
    'ui.router',
    'vetjoy.home',
    'vetjoy.landingPage'
])

.config([
    '$urlRouterProvider',
function myAppConfig (
    $urlRouterProvider
){
    $urlRouterProvider.otherwise('/home');
}])

.run(function run(){
})

.controller('AppCtrl', function AppCtrl ($scope) {

});