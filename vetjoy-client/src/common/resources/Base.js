/**
* resource.Base Module
*
* Description
*/
angular.module('resource.Base', [])
.factory('Base', [function () {
    var firebaseDB = new Firebase('https://vetjoy.firebaseio.com/');
    return firebaseDB;
}]);