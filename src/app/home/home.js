(function(module) {

    module.controller('HomeController', function (project, $scope, EmailService) {
        var model = this,
            submitted = false;
        model.emails = _.values(project.child('emails').val()) || [];
        model.email = '';
        model.header = project.child('header').val() || '';
        model.company = project.child('displayName').val() || '';
        model.interacted = interacted;
        model.hasEmails = hasEmails;
        model.requestSubmit = requestSubmit;
        model.clearError = clearError;
        model.customErrors = {
            isSameEmail: false
        };

        ///////////

        function interacted(field) {
            return submitted || field.$dirty;
        }

        function checkIsSameEmail() {
            return _.indexOf(model.emails, model.email) >= 0;
        }

        function hasEmails () {
            return _.size(model.emails) > 0;
        }

        function clearError () {
            model.customErrors.isSameEmail = false;
        }

        function requestSubmit() {
            submitted = true;
            if (checkIsSameEmail()) {
                model.customErrors.isSameEmail = true;
            }
            if ($scope.requestForm.$valid &&
                !model.customErrors.isSameEmail) {
                return EmailService
                    .register(project, model.email)
                    .then(function (response) {
                        model.isSuccess = true;
                        model.emails.push(model.email);
                    }, function (response) {
                        console.log(response);
                    });
            }
        }
    });

}(angular.module("SimpleLandingPage.home")));