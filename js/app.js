angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/index.html'
            })
            .state('partial', {
                url: '/partial',
                parent: 'home',
                templateUrl: '/html/partial.html'
            })
            .state('main', {
                url: '/main',
                parent: 'home',
                templateUrl: '/html/main.html'
            })
            .state('secpartial', {
                url: '/secpartial',
                parent: 'home',
                templateUrl: '/html/secpartial.html'
            })
            .state('contactus', {
                url: '/contactus',
                parent: 'home',
                templateUrl: '/html/contactus.html'
            })
            .state('thanks', {
                url: '/thanks',
                parent: 'home',
                templateUrl: '/html/thanks.html'})
    });
