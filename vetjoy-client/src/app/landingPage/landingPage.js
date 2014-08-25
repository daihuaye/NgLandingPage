/**
* vetjoy.landingPage Module
*
* Description
*/
angular.module('vetjoy.landingPage', [
    'ngMessages',
    'ngAnimate',
    'resource.VetJoy',
    'service.Util',
    'directive.diFocusMe'
])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('landingPage', {
        url: '/:corp',
        abstract: true,
        views: {
            'main': {
                template: '<ui-view/>'
            }
        }
    })
    .state('landingPage.company', {
        url: '',
        views: {
            '': {
                controller: 'LandingPageCtrl',
                templateUrl: 'landingPage/landingPage.tpl.html'
            }
        },
        resolve: {
            corp: ['VetJoy', '$stateParams', '$state', function (VetJoy, $stateParams, $state) {
                return VetJoy
                        .requestForCorp($stateParams.corp)
                        .then(null, function () {
                            $state.go('landingPage.404', $stateParams);
                        });
            }]
        }
    })
    .state('landingPage.404', {
        url: '',
        templateUrl: 'assets/404.tpl.html'
    });
}])
.controller('LandingPageCtrl', [
    '$scope',
    '$state',
    'Util',
    'VetJoy',
    'corp',
function (
    $scope,
    $state,
    Util,
    VetJoy,
    corp
){
    var submitted = false;

    $scope.isSuccess = false;
    $scope.emails = corp.child('emails').val() || {};
    $scope.company = corp.child('displayName').val();

    $scope.request = {
        email: ''
    };
    $scope.customErrors = {
        isSameEmail: false
    };

    function checkIsSameEmail() {
        return _.find($scope.emails, function (e) {
            return e === $scope.request.email;
        });
    }

    $scope.interacted = function interacted(field) {
      return submitted || field.$dirty;
    };

    $scope.enterKeyToSubimt = function enterKeyToSubimt(e) {
        if (e.keyCode === 13) {

        }
        if (!checkIsSameEmail()) {
            $scope.customErrors.isSameEmail = false;
        }
    };

    $scope.hasEmails = function hasEmails() {
        return _.size($scope.emails) > 0;
    };

    $scope.requestSubmit = function requestSubmit() {
        submitted = true;
        if (checkIsSameEmail()) {
            $scope.customErrors.isSameEmail = true;
        }
        if ($scope.requestForm.$valid && 
            !$scope.customErrors.isSameEmail) {
            return VetJoy
                .registerVetJoy(corp, $scope.request.email)
                .then(function (response) {
                    $scope.isSuccess = true;
                    $scope.emails[$scope.request.email] = $scope.request.email;
                }, function (response) {
                    console.log(response);
                });
        }
    };

}]);