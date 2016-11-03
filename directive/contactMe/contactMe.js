angular.module('cv').directive('contactMe', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'directive/contactMe/contactMe.html',
        link: function (scope, element, attrs, fn) {

            emailjs.init("user_S7ZBu5b0EStBxgQIyc1JN");

            scope.sendEmail = function () {

                emailjs.send("gmail", "contact_message", {
                    name: scope.contactName, email: scope.contactEmail,
                    message: scope.contactMessage
                });

                scope.contactName = '';
                scope.contactEmail = '';
                scope.contactMessage = 'Your message has been sent.';

                setTimeout(scope.resetMessage, 1000);

            };

            scope.resetMessage = function(){

                scope.contactMessage = '';
                scope.$apply();

            };

        }
    };
});
