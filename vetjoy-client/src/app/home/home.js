angular.module( 'vetjoy.home', [
    'ui.router',
    'ngMessages',
    'ngAnimate'
])
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        views: {
            'main': {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        }
    });
}])
.controller('HomeCtrl', [
    '$scope',
    '$state',
function HomeController(
    $scope,
    $state
){
}]);