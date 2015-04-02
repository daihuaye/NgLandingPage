(function(module) {

    module.factory('EmailService', function ($q) {
        var firebaseDB = new Firebase('https://SimpleLandingPage.firebaseio.com/');

        return {
            register: register,
            registerForProject: registerForProject
        };

        function register(snapshot, email) {
            var fbPromise = $q.defer();
            snapshot
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

        function registerForProject(project) {
            var fbProject = firebaseDB.child('projects').child(project),
                fbPromise = $q.defer();
            fbProject.once('value', function (snapshot) {
                if (snapshot.val()) {
                    fbPromise.resolve(snapshot);
                } else {
                    fbPromise.reject();
                }
            }, function (err) {
                fbPromise.reject(err);
            });

            return fbPromise.promise;
        }

    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("NgLandingPage.service.email", [])));