/**
* resource.VetJoy Module
*
* Description
*/
angular.module('resource.VetJoy', [
])
.factory('VetJoy', [
    'Util',
    '$q',
function (
    Util,
    $q
){
    var VetJoy = {
        requestForInvitedEmails: function requestForInvitedEmails(crop) {
            // return Restangular
            //     .one('corp', crop)
            //     .one('registered')
            //     .get()
            //     .then(function (response) {
            //         return response;
            //     }, function (response) {
            //         return $q.reject(response);
            //     });
            return [];
        },
        registerVetJoy: function registerVetJoy(crop, email) {
            // return Restangular
            //     .one('corp', crop)
            //     .post('registered', email)
            //     .then(function (response) {
            //         return response;
            //     }, function (response) {
            //         return $q.reject(response);
            //     });
            return [];
        }
    };

    return VetJoy;
}]);