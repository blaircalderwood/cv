var cvApp = angular.module('cv', ['ui.bootstrap', 'chart.js', 'ngRoute', 'ngAnimate']);

    cvApp.config(['$routeProvider', function ($routeProvider) {

        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo: '/'});

    }]);

    cvApp.run(['$rootScope', function ($rootScope) {

        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    }]);
