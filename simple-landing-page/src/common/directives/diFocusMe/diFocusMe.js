/**
* directive.diFocusMe Module
*
* Description
*/
angular.module('directive.diFocusMe', [])
.controller('FocusMeCtrl', [
    '$scope',
function (
    $scope
){
}])
.directive('diFocusMe', [
function(
){
    var FocusMe = {};

    FocusMe.controller = 'FocusMeCtrl';
    
    FocusMe.restrict = 'A';

    FocusMe.scope = {
        focusMe: '='
    };

    FocusMe.link = function link(scope, element, attrs) {
        scope.$watch('focusMe', function () {
            if (scope.focusMe) {
                element[0].focus();
            }
        });
    };

    return FocusMe;
}]);