/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
(function(module) {

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    module.controller('HomeController', function () {
        // The top section of a controller should be lean and make it easy to see the "signature" of the controller
        //  at a glance.  All function definitions should be contained lower down.
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

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SimpleLandingPage.home")));