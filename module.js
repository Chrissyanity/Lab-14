var app = angular.module('catDog', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/kitty', {
    controller: 'catController',
    templateUrl: 'kitty.html'
  })
  .when('/doggy', {
    controller: 'dogController',
    templateUrl: 'doggy.html'
  })
  .when('/guinea', {
    controller: 'guineaController',
    templateUrl: 'guinea.html'
  })
  .when('/koala', {
    controller: 'koalaController',
    templateUrl: 'koala.html'
  })
  .otherwise({ redirectTo: '/' });
  $locationProvider.hashPrefix('');
})
