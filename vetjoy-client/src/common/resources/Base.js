/**
* resource.Base Module
*
* Description
*/
angular.module('resource.Base', [])
.factory('Base', [function () {
    var firebaseDB = new Firebase('');
    return firebaseDB;
}]);
