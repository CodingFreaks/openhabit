// Ionic openHabit App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'openHabit' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('openHabit', ['ionic', 'ngMaterial', 'openHABit.controllers'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            //if (window.cordova && window.cordova.plugins.Keyboard) {
            //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            //}
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "screens/menu.html"
            })

            .state('app.main', {
                url: "/main",
                views: {
                    'menuContent': {
                        templateUrl: "screens/main.html"
                    }
                }
            })

            .state('app.settings', {
                url: "/settings",
                views: {
                    'menuContent': {
                        templateUrl: "screens/settings.html"
                    }
                }
            })

        .state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "screens/about.html"
                }
            }
        })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/main');
    });

