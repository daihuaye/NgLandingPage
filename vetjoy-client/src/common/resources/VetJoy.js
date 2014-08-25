/**
* resource.VetJoy Module
*
* Description
*/
angular.module('resource.VetJoy', [
    'resource.Base'
])
.factory('VetJoy', [
    'Util',
    '$q',
    'Base',
function (
    Util,
    $q,
    Base
){
    var VetJoy = {
        requestForCorp: function requestForCorp(corp) {
            var fbCorp = Base.child('corp').child(corp),
                fbPromise = $q.defer();
            fbCorp.once('value', function (snapshot) {
                if (snapshot.val()) {
                    fbPromise.resolve(snapshot);
                } else {
                    fbPromise.reject();
                }
            }, function (err) {
                fbPromise.reject(err);
            });
            
            return fbPromise.promise;
        },
        registerVetJoy: function registerVetJoy(corpSnapshot, email) {
            var fbPromise = $q.defer();
            corpSnapshot
            .child('emails')
            .ref()
            .push(email, function(response) {
                if (response === null) {
                    fbPromise.resolve();
                } else {
                    fbPromise.reject();
                }
            });
            return fbPromise.promise;
        }
    };

    return VetJoy;
}]);