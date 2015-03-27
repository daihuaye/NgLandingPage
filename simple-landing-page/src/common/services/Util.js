/**
* service.Util Module
*
* Description
*/
angular.module('service.Util', [])
.factory('Util', [function () {
    var Util = {};

    Util.capitaliseFirstLetter = function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    Util.getCompanyName = function getCompanyName(str) {
        var names = str.split('-'),
            fullCompanyName = '';

        fullCompanyName = _.reduce(names, function (memo, name) {
            return memo + Util.capitaliseFirstLetter(name) + ' ';
        }, '');
        return fullCompanyName.trim();  
    };

    return Util;
}]);