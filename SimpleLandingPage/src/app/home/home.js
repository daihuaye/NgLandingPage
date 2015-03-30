(function(module) {

    module.controller('HomeController', function () {
        var model = this,
            submitted = false;
        model.emails = ['one', 'two', 'three'];
        model.email = '';
        model.header = 'blue';
        model.company = 'Company';
        model.interacted = interacted;
        model.hasEmails = hasEmails;
        model.customErrors = {
            isSameEmail: false
        };

        ///////////

        function interacted(field) {
          return submitted || field.$dirty;
        }

        function checkIsSameEmail() {
            return _.find(model.emails, function (e) {
                return e === model.email;
            });
        }

        function hasEmails () {
            return _.size(model.emails) > 0;
        }

    });

}(angular.module("SimpleLandingPage.home")));