'use strict';
var xoxo = angular.module('xoxo',['xoxo.controllers','xoxo.directives','ngRoute','xoxo.services','ngAnimate','xoxo.filters']);

// Routes section
xoxo.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/',{
		controller:'introCtrl',
		templateUrl: 'views/dificulty.html',
	})
	.when('/success',{
		controller:'introCtrl',
		templateUrl: 'views/success.html',
	})
	.when('/:dificulty',{
		controller:'introCtrl',
		templateUrl: 'views/levels.html',
	})
	.when('/:dificulty/:level',{
		controller:'introCtrl',
		templateUrl: 'views/level.html',
	})
	.otherwise({redirectTo:'/'});
}]);