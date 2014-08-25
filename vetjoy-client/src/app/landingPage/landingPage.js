/**
* vetjoy.landingPage Module
*
* Description
*/
angular.module('vetjoy.landingPage', [
    'ngMessages',
    'ngAnimate',
    'resource.VetJoy',
    'service.Util'
])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('landingPage', {
        url: '/:company',
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
function (
    $scope,
    $state,
    Util,
    VetJoy
){
    var submitted = false;

    $scope.isSuccess = false;
    $scope.emails = [];
    $scope.company = Util.getCompanyName($state.params.company);

    switch($scope.company.toLowerCase()) {
        case 'splunk': 
        case 'zoosk':
        case 'airbnb':
        case 'google':
        case 'amazon':
        case 'autodesk':
        case 'clif-bar':
        case 'eventbrite':
        case 'facebook':
        case 'getaround':
        case 'heroku':
        case 'indiegogo':
        case 'kiva':
        case 'practice-fusion':
        case 'salesforce':
        case 'trulia':
        case 'whistle':
        case 'workday':
        case 'yelp':
        case 'advent-software':
        case 'huffington post':
        case 'lyft':
        case 'palantir':
        case 'pinterest':
            break;
        default: 
            $state.go('landingPage.404');
            break;
    }

    $scope.request = {
        email: ''
    };
    $scope.customErrors = {
        isSameEmail: false
    };

    function checkIsSameEmail() {
        return _.find(emails, function (e) {
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

    $scope.requestSubmit = function requestSubmit() {
        submitted = true;
        if (checkIsSameEmail()) {
            $scope.customErrors.isSameEmail = true;
        }
        if ($scope.requestForm.$valid && 
            !$scope.customErrors.isSameEmail) {
            return VetJoy
                .registerVetJoy($scope.company, $scope.request)
                .then(function (response) {
                    $scope.isSuccess = true;
                    $scope.emails.push($scope.request.email);
                }, function (response) {
                    console.log(response);
                });
        }
    };

}]);