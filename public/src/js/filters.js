'use strict';
var xoxo = angular.module('xoxo.filters',[]);
var filters = {};
filters.time = function(){
	return function(input) {
		if (isNaN(input)){
			return "";
		}
		var minutes = Math.floor(input/60);
		var secondes = input % 60;
		if (secondes < 10)
			secondes = '0' + secondes;
		
		return minutes + ":" + secondes;
	};
};

xoxo.filter(filters);