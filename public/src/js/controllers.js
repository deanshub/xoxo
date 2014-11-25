'use strict';
var xoxo = angular.module('xoxo.controllers',['xoxo.services']);

var controllers={};

controllers.introCtrl = ['$scope', '$location', '$routeParams', '$timeout', 'General', function ($scope, $location, $routeParams, $timeout, General) {
	$scope.dificulties = [{name:"8X8",x:8,y:8,color:"green",levels:[
			{predefineds:[{content:1,predefined:true,x:3,y:0},{content:1,predefined:true,x:5,y:0},{content:1,predefined:true,x:1,y:1},{content:1,predefined:true,x:4,y:2},{content:1,predefined:true,x:5,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:2,y:3},{content:2,predefined:true,x:6,y:3},{content:1,predefined:true,x:0,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:3,y:5},{content:1,predefined:true,x:6,y:5},{content:1,predefined:true,x:7,y:5},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:2,y:7},{content:2,predefined:true,x:6,y:7}]},
			{predefineds:[{content:2,predefined:true,x:1,y:1},{content:2,predefined:true,x:3,y:1},{content:2,predefined:true,x:1,y:2},{content:1,predefined:true,x:3,y:3},{content:2,predefined:true,x:0,y:4},{content:2,predefined:true,x:1,y:4},{content:2,predefined:true,x:4,y:4},{content:2,predefined:true,x:0,y:5},{content:2,predefined:true,x:1,y:5},{content:1,predefined:true,x:6,y:5},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:0,y:7},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:3,y:7}]},
			{predefineds:[{content:1,predefined:true,x:4,y:1},{content:1,predefined:true,x:7,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:1,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:0,y:3},{content:2,predefined:true,x:1,y:3},{content:2,predefined:true,x:6,y:3},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:7,y:4},{content:2,predefined:true,x:2,y:5},{content:2,predefined:true,x:5,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:0,y:6},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:2,y:7},{content:2,predefined:true,x:3,y:7},{content:2,predefined:true,x:4,y:7},{content:1,predefined:true,x:6,y:7}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:2,predefined:true,x:3,y:0},{content:2,predefined:true,x:4,y:0},{content:1,predefined:true,x:6,y:1},{content:2,predefined:true,x:7,y:1},{content:1,predefined:true,x:2,y:2},{content:1,predefined:true,x:5,y:3},{content:1,predefined:true,x:7,y:3},{content:2,predefined:true,x:0,y:4},{content:2,predefined:true,x:4,y:4},{content:1,predefined:true,x:6,y:4},{content:2,predefined:true,x:2,y:5},{content:2,predefined:true,x:4,y:5},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:5,y:7},{content:1,predefined:true,x:6,y:7},{content:2,predefined:true,x:7,y:7}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:2,predefined:true,x:1,y:0},{content:2,predefined:true,x:6,y:0},{content:2,predefined:true,x:3,y:1},{content:1,predefined:true,x:6,y:1},{content:2,predefined:true,x:7,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:1,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:1,y:3},{content:2,predefined:true,x:6,y:3},{content:2,predefined:true,x:0,y:4},{content:2,predefined:true,x:2,y:5},{content:1,predefined:true,x:4,y:5},{content:1,predefined:true,x:6,y:5},{content:2,predefined:true,x:7,y:5},{content:2,predefined:true,x:2,y:6},{content:2,predefined:true,x:3,y:6},{content:1,predefined:true,x:4,y:6},{content:1,predefined:true,x:6,y:7}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:1,predefined:true,x:3,y:0},{content:1,predefined:true,x:4,y:0},{content:2,predefined:true,x:2,y:2},{content:1,predefined:true,x:4,y:2},{content:1,predefined:true,x:7,y:2},{content:1,predefined:true,x:1,y:3},{content:2,predefined:true,x:2,y:3},{content:2,predefined:true,x:6,y:3},{content:1,predefined:true,x:7,y:3},{content:1,predefined:true,x:1,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:5,y:4},{content:1,predefined:true,x:0,y:5},{content:1,predefined:true,x:5,y:5},{content:1,predefined:true,x:0,y:6},{content:2,predefined:true,x:1,y:7},{content:1,predefined:true,x:4,y:7},{content:2,predefined:true,x:5,y:7}]},
			{predefineds:[{content:1,predefined:true,x:5,y:0},{content:2,predefined:true,x:6,y:0},{content:2,predefined:true,x:1,y:1},{content:1,predefined:true,x:0,y:2},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:5,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:2,y:3},{content:2,predefined:true,x:3,y:3},{content:2,predefined:true,x:7,y:3},{content:2,predefined:true,x:1,y:4},{content:2,predefined:true,x:6,y:4},{content:1,predefined:true,x:2,y:5},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:5,y:5},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:7,y:6},{content:2,predefined:true,x:0,y:7},{content:2,predefined:true,x:6,y:7},{content:1,predefined:true,x:7,y:7}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:2,predefined:true,x:2,y:0},{content:2,predefined:true,x:5,y:0},{content:1,predefined:true,x:4,y:1},{content:2,predefined:true,x:7,y:1},{content:2,predefined:true,x:2,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:6,y:2},{content:2,predefined:true,x:0,y:3},{content:2,predefined:true,x:1,y:3},{content:2,predefined:true,x:6,y:3},{content:2,predefined:true,x:5,y:5},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:4,y:6},{content:2,predefined:true,x:6,y:6},{content:1,predefined:true,x:7,y:6},{content:1,predefined:true,x:0,y:7},{content:2,predefined:true,x:2,y:7},{content:2,predefined:true,x:3,y:7},{content:1,predefined:true,x:7,y:7}]},
			{predefineds:[{content:2,predefined:true,x:2,y:0},{content:2,predefined:true,x:6,y:0},{content:2,predefined:true,x:0,y:1},{content:2,predefined:true,x:2,y:1},{content:2,predefined:true,x:3,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:1,y:2},{content:2,predefined:true,x:6,y:2},{content:2,predefined:true,x:2,y:3},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:6,y:5},{content:2,predefined:true,x:7,y:5},{content:2,predefined:true,x:3,y:6},{content:1,predefined:true,x:6,y:6},{content:1,predefined:true,x:7,y:6},{content:2,predefined:true,x:3,y:7},{content:2,predefined:true,x:5,y:7}]}
		]},
					{name:"10X10",x:10,y:10,color:"yellow",levels:[
			{predefineds:[{content:1,predefined:true,x:2,y:0},{content:1,predefined:true,x:6,y:0},{content:1,predefined:true,x:6,y:1},{content:1,predefined:true,x:7,y:1},{content:2,predefined:true,x:1,y:2},{content:2,predefined:true,x:5,y:3},{content:2,predefined:true,x:7,y:3},{content:2,predefined:true,x:1,y:4},{content:1,predefined:true,x:2,y:4},{content:2,predefined:true,x:9,y:4},{content:2,predefined:true,x:4,y:6},{content:1,predefined:true,x:7,y:6},{content:1,predefined:true,x:5,y:7},{content:1,predefined:true,x:6,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:1,y:8},{content:2,predefined:true,x:8,y:8},{content:2,predefined:true,x:0,y:9},{content:2,predefined:true,x:1,y:9},{content:2,predefined:true,x:4,y:9}]},
			{predefineds:[{content:2,predefined:true,x:5,y:0},{content:2,predefined:true,x:7,y:0},{content:2,predefined:true,x:8,y:0},{content:1,predefined:true,x:6,y:1},{content:1,predefined:true,x:9,y:1},{content:1,predefined:true,x:3,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:0,y:3},{content:1,predefined:true,x:1,y:3},{content:1,predefined:true,x:3,y:3},{content:2,predefined:true,x:7,y:3},{content:1,predefined:true,x:9,y:4},{content:1,predefined:true,x:0,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:2,y:6},{content:2,predefined:true,x:3,y:6},{content:1,predefined:true,x:9,y:6},{content:2,predefined:true,x:3,y:7},{content:2,predefined:true,x:5,y:7},{content:2,predefined:true,x:7,y:7},{content:2,predefined:true,x:8,y:7},{content:2,predefined:true,x:1,y:8},{content:1,predefined:true,x:5,y:8},{content:1,predefined:true,x:6,y:8},{content:2,predefined:true,x:2,y:9},{content:2,predefined:true,x:5,y:9}]},
			{predefineds:[{content:1,predefined:true,x:5,y:0},{content:1,predefined:true,x:9,y:0},{content:1,predefined:true,x:3,y:1},{content:2,predefined:true,x:4,y:1},{content:2,predefined:true,x:6,y:1},{content:2,predefined:true,x:9,y:1},{content:2,predefined:true,x:1,y:2},{content:1,predefined:true,x:3,y:2},{content:2,predefined:true,x:6,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:8,y:2},{content:1,predefined:true,x:0,y:3},{content:2,predefined:true,x:8,y:3},{content:2,predefined:true,x:2,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:7,y:4},{content:1,predefined:true,x:0,y:5},{content:2,predefined:true,x:2,y:5},{content:2,predefined:true,x:3,y:5},{content:2,predefined:true,x:9,y:5},{content:2,predefined:true,x:0,y:6},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:2,y:6},{content:1,predefined:true,x:8,y:6},{content:2,predefined:true,x:0,y:7},{content:2,predefined:true,x:1,y:7},{content:1,predefined:true,x:7,y:7},{content:1,predefined:true,x:4,y:8},{content:2,predefined:true,x:5,y:8},{content:1,predefined:true,x:7,y:8},{content:1,predefined:true,x:8,y:8},{content:1,predefined:true,x:3,y:9},{content:2,predefined:true,x:4,y:9},{content:2,predefined:true,x:5,y:9}]},
			{predefineds:[{content:1,predefined:true,x:1,y:0},{content:1,predefined:true,x:6,y:0},{content:2,predefined:true,x:8,y:0},{content:2,predefined:true,x:9,y:0},{content:2,predefined:true,x:2,y:1},{content:1,predefined:true,x:5,y:1},{content:2,predefined:true,x:6,y:1},{content:1,predefined:true,x:0,y:2},{content:1,predefined:true,x:2,y:2},{content:1,predefined:true,x:4,y:2},{content:2,predefined:true,x:8,y:2},{content:2,predefined:true,x:6,y:3},{content:1,predefined:true,x:9,y:3},{content:2,predefined:true,x:1,y:4},{content:2,predefined:true,x:2,y:4},{content:1,predefined:true,x:5,y:4},{content:1,predefined:true,x:6,y:4},{content:1,predefined:true,x:1,y:5},{content:1,predefined:true,x:2,y:5},{content:2,predefined:true,x:4,y:5},{content:2,predefined:true,x:6,y:5},{content:2,predefined:true,x:7,y:5},{content:1,predefined:true,x:5,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:1,y:8},{content:1,predefined:true,x:3,y:8},{content:2,predefined:true,x:4,y:8},{content:2,predefined:true,x:5,y:8},{content:1,predefined:true,x:7,y:8},{content:2,predefined:true,x:1,y:9},{content:2,predefined:true,x:2,y:9},{content:1,predefined:true,x:3,y:9},{content:2,predefined:true,x:7,y:9}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:1,predefined:true,x:6,y:0},{content:1,predefined:true,x:4,y:1},{content:2,predefined:true,x:6,y:1},{content:2,predefined:true,x:7,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:1,y:2},{content:1,predefined:true,x:8,y:2},{content:1,predefined:true,x:4,y:3},{content:1,predefined:true,x:6,y:3},{content:2,predefined:true,x:7,y:3},{content:1,predefined:true,x:1,y:4},{content:2,predefined:true,x:3,y:4},{content:2,predefined:true,x:7,y:4},{content:1,predefined:true,x:0,y:5},{content:2,predefined:true,x:1,y:5},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:4,y:5},{content:2,predefined:true,x:8,y:5},{content:2,predefined:true,x:3,y:6},{content:1,predefined:true,x:5,y:6},{content:2,predefined:true,x:6,y:6},{content:1,predefined:true,x:0,y:7},{content:2,predefined:true,x:6,y:7},{content:2,predefined:true,x:9,y:7},{content:1,predefined:true,x:1,y:8},{content:2,predefined:true,x:3,y:8},{content:2,predefined:true,x:4,y:8},{content:1,predefined:true,x:6,y:8},{content:1,predefined:true,x:1,y:9},{content:2,predefined:true,x:2,y:9},{content:1,predefined:true,x:4,y:9},{content:2,predefined:true,x:9,y:9}]},
			{predefineds:[{content:2,predefined:true,x:2,y:0},{content:2,predefined:true,x:3,y:0},{content:2,predefined:true,x:5,y:0},{content:1,predefined:true,x:2,y:1},{content:1,predefined:true,x:3,y:1},{content:2,predefined:true,x:5,y:1},{content:1,predefined:true,x:7,y:1},{content:2,predefined:true,x:8,y:1},{content:2,predefined:true,x:0,y:2},{content:1,predefined:true,x:6,y:2},{content:2,predefined:true,x:0,y:3},{content:1,predefined:true,x:5,y:3},{content:1,predefined:true,x:7,y:3},{content:2,predefined:true,x:8,y:3},{content:1,predefined:true,x:1,y:4},{content:1,predefined:true,x:3,y:4},{content:2,predefined:true,x:4,y:4},{content:1,predefined:true,x:8,y:4},{content:2,predefined:true,x:9,y:4},{content:1,predefined:true,x:1,y:5},{content:2,predefined:true,x:4,y:5},{content:1,predefined:true,x:5,y:5},{content:2,predefined:true,x:6,y:5},{content:2,predefined:true,x:3,y:6},{content:1,predefined:true,x:5,y:6},{content:2,predefined:true,x:0,y:7},{content:2,predefined:true,x:2,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:3,y:8},{content:1,predefined:true,x:8,y:8},{content:2,predefined:true,x:2,y:9},{content:1,predefined:true,x:9,y:9}]},
			{predefineds:[{content:1,predefined:true,x:7,y:0},{content:1,predefined:true,x:0,y:1},{content:1,predefined:true,x:5,y:1},{content:2,predefined:true,x:7,y:1},{content:1,predefined:true,x:1,y:2},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:7,y:2},{content:1,predefined:true,x:1,y:3},{content:2,predefined:true,x:2,y:3},{content:1,predefined:true,x:7,y:3},{content:2,predefined:true,x:2,y:4},{content:1,predefined:true,x:4,y:4},{content:1,predefined:true,x:9,y:4},{content:2,predefined:true,x:1,y:5},{content:1,predefined:true,x:4,y:5},{content:2,predefined:true,x:7,y:5},{content:1,predefined:true,x:2,y:6},{content:2,predefined:true,x:9,y:7},{content:2,predefined:true,x:2,y:8},{content:2,predefined:true,x:3,y:8},{content:2,predefined:true,x:6,y:8},{content:2,predefined:true,x:1,y:9},{content:2,predefined:true,x:8,y:9},{content:2,predefined:true,x:9,y:9}]}
		]},
					{name:"12X12",x:12,y:12,color:"red",levels:[
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:2,predefined:true,x:3,y:0},{content:2,predefined:true,x:5,y:0},{content:2,predefined:true,x:7,y:0},{content:2,predefined:true,x:11,y:0},{content:2,predefined:true,x:1,y:1},{content:1,predefined:true,x:3,y:1},{content:2,predefined:true,x:4,y:1},{content:2,predefined:true,x:1,y:2},{content:2,predefined:true,x:5,y:2},{content:1,predefined:true,x:6,y:2},{content:1,predefined:true,x:8,y:2},{content:1,predefined:true,x:10,y:2},{content:1,predefined:true,x:11,y:2},{content:1,predefined:true,x:0,y:3},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:10,y:3},{content:1,predefined:true,x:0,y:4},{content:2,predefined:true,x:4,y:4},{content:1,predefined:true,x:6,y:4},{content:2,predefined:true,x:7,y:4},{content:2,predefined:true,x:2,y:5},{content:2,predefined:true,x:4,y:5},{content:1,predefined:true,x:5,y:5},{content:2,predefined:true,x:8,y:5},{content:1,predefined:true,x:9,y:5},{content:1,predefined:true,x:11,y:5},{content:2,predefined:true,x:1,y:6},{content:2,predefined:true,x:6,y:6},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:3,y:7},{content:1,predefined:true,x:8,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:0,y:8},{content:1,predefined:true,x:1,y:8},{content:2,predefined:true,x:5,y:8},{content:2,predefined:true,x:6,y:8},{content:2,predefined:true,x:8,y:8},{content:1,predefined:true,x:0,y:9},{content:2,predefined:true,x:3,y:9},{content:1,predefined:true,x:7,y:9},{content:2,predefined:true,x:10,y:9},{content:2,predefined:true,x:0,y:10},{content:2,predefined:true,x:4,y:10},{content:2,predefined:true,x:8,y:10},{content:2,predefined:true,x:11,y:10},{content:2,predefined:true,x:1,y:11},{content:2,predefined:true,x:3,y:11},{content:2,predefined:true,x:4,y:11},{content:1,predefined:true,x:6,y:11},{content:1,predefined:true,x:8,y:11},{content:1,predefined:true,x:9,y:11}]},
			{predefineds:[{content:1,predefined:true,x:2,y:0},{content:2,predefined:true,x:4,y:0},{content:1,predefined:true,x:9,y:0},{content:1,predefined:true,x:10,y:0},{content:2,predefined:true,x:11,y:0},{content:2,predefined:true,x:0,y:1},{content:2,predefined:true,x:1,y:1},{content:1,predefined:true,x:10,y:1},{content:2,predefined:true,x:3,y:2},{content:1,predefined:true,x:8,y:2},{content:1,predefined:true,x:9,y:2},{content:1,predefined:true,x:11,y:2},{content:2,predefined:true,x:5,y:3},{content:1,predefined:true,x:11,y:3},{content:1,predefined:true,x:1,y:4},{content:2,predefined:true,x:2,y:4},{content:1,predefined:true,x:3,y:4},{content:1,predefined:true,x:8,y:4},{content:2,predefined:true,x:10,y:4},{content:2,predefined:true,x:2,y:5},{content:2,predefined:true,x:4,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:11,y:5},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:8,y:6},{content:2,predefined:true,x:9,y:6},{content:1,predefined:true,x:0,y:7},{content:1,predefined:true,x:1,y:7},{content:2,predefined:true,x:4,y:7},{content:2,predefined:true,x:6,y:7},{content:2,predefined:true,x:9,y:7},{content:1,predefined:true,x:1,y:8},{content:1,predefined:true,x:2,y:8},{content:2,predefined:true,x:3,y:8},{content:1,predefined:true,x:9,y:8},{content:2,predefined:true,x:11,y:8},{content:1,predefined:true,x:6,y:9},{content:1,predefined:true,x:7,y:9},{content:1,predefined:true,x:0,y:10},{content:2,predefined:true,x:3,y:10},{content:2,predefined:true,x:8,y:10},{content:2,predefined:true,x:10,y:10},{content:2,predefined:true,x:2,y:11},{content:1,predefined:true,x:3,y:11},{content:1,predefined:true,x:5,y:11},{content:1,predefined:true,x:6,y:11},{content:1,predefined:true,x:8,y:11},{content:2,predefined:true,x:9,y:11}]},
			{predefineds:[{content:1,predefined:true,x:1,y:0},{content:2,predefined:true,x:7,y:0},{content:2,predefined:true,x:1,y:1},{content:2,predefined:true,x:6,y:1},{content:1,predefined:true,x:8,y:1},{content:1,predefined:true,x:10,y:1},{content:2,predefined:true,x:11,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:2,y:2},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:9,y:2},{content:1,predefined:true,x:1,y:3},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:0,y:4},{content:1,predefined:true,x:5,y:4},{content:1,predefined:true,x:8,y:4},{content:2,predefined:true,x:10,y:4},{content:1,predefined:true,x:11,y:4},{content:2,predefined:true,x:1,y:5},{content:2,predefined:true,x:3,y:5},{content:1,predefined:true,x:4,y:5},{content:2,predefined:true,x:6,y:5},{content:1,predefined:true,x:8,y:5},{content:2,predefined:true,x:9,y:5},{content:1,predefined:true,x:0,y:6},{content:2,predefined:true,x:7,y:6},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:2,y:7},{content:1,predefined:true,x:4,y:7},{content:1,predefined:true,x:6,y:7},{content:1,predefined:true,x:8,y:7},{content:1,predefined:true,x:11,y:7},{content:1,predefined:true,x:3,y:8},{content:2,predefined:true,x:6,y:8},{content:2,predefined:true,x:11,y:8},{content:2,predefined:true,x:0,y:9},{content:2,predefined:true,x:3,y:9},{content:1,predefined:true,x:8,y:9},{content:2,predefined:true,x:10,y:9},{content:1,predefined:true,x:2,y:10},{content:1,predefined:true,x:4,y:10},{content:2,predefined:true,x:7,y:10},{content:2,predefined:true,x:10,y:10},{content:2,predefined:true,x:5,y:11},{content:2,predefined:true,x:6,y:11},{content:1,predefined:true,x:8,y:11}]},
			{predefineds:[{content:1,predefined:true,x:2,y:0},{content:1,predefined:true,x:4,y:0},{content:1,predefined:true,x:8,y:0},{content:1,predefined:true,x:11,y:0},{content:2,predefined:true,x:1,y:1},{content:2,predefined:true,x:6,y:1},{content:2,predefined:true,x:10,y:1},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:9,y:2},{content:2,predefined:true,x:8,y:3},{content:2,predefined:true,x:11,y:3},{content:2,predefined:true,x:0,y:4},{content:2,predefined:true,x:2,y:4},{content:1,predefined:true,x:3,y:4},{content:1,predefined:true,x:8,y:4},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:4,y:5},{content:1,predefined:true,x:6,y:5},{content:1,predefined:true,x:9,y:5},{content:1,predefined:true,x:10,y:5},{content:2,predefined:true,x:9,y:6},{content:1,predefined:true,x:0,y:7},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:4,y:7},{content:1,predefined:true,x:5,y:7},{content:1,predefined:true,x:8,y:7},{content:1,predefined:true,x:10,y:7},{content:1,predefined:true,x:0,y:8},{content:2,predefined:true,x:7,y:8},{content:1,predefined:true,x:1,y:9},{content:1,predefined:true,x:2,y:9},{content:2,predefined:true,x:5,y:9},{content:1,predefined:true,x:6,y:9},{content:2,predefined:true,x:9,y:9},{content:1,predefined:true,x:10,y:9},{content:2,predefined:true,x:0,y:10},{content:1,predefined:true,x:5,y:10},{content:1,predefined:true,x:10,y:10},{content:1,predefined:true,x:11,y:10},{content:1,predefined:true,x:4,y:11},{content:1,predefined:true,x:9,y:11}]}
		]}];

	$scope.levelCount = 0;
	for (var i = 0; i < $scope.dificulties.length; i++) {
		$scope.levelCount += $scope.dificulties[i].levels.length;
	}

	$scope.selectDificulty = function(dificulty){
		$location.path(dificulty);
	};

	$scope.setDificulty = function(){
		var i = 0;
		var levelFound = false;
		while(!levelFound && i<$scope.dificulties.length){
			if ($scope.dificulties[i].name == $routeParams.dificulty){
				levelFound = true;
				$scope.currentLevel=$scope.dificulties[i];
				var complete = JSON.parse(localStorage.getItem("complete"));
				if (complete && complete[$routeParams.dificulty]){
					for (var i = 0; i < complete[$routeParams.dificulty].length; i++) {
						$scope.currentLevel.levels[complete[$routeParams.dificulty][i]].done = true;
					}
				}
			}else{
				i++;
			}
		}

		if (!levelFound){
			$location.path('/');
		}
	};

	$scope.selectLevel = function(currentLevel, levelNum){
		$location.path(currentLevel.name+"/" + levelNum);
	};

	$scope.setupLevel = function(){
		$scope.board =[];
		$scope.leftTiles =[];

		var i = 0;
		var levelFound = false;
		while(!levelFound && i<$scope.dificulties.length){
			if ($scope.dificulties[i].name == $routeParams.dificulty){
				levelFound = true;
				$scope.currentLevel=$scope.dificulties[i];
			}else{
				i++;
			}
		}

		$scope.currentStage = $scope.currentLevel.levels[$routeParams.level-1];

		if($scope.currentStage || $routeParams.level == "new"){
			for (i = 0; i < $scope.currentLevel.x; i++) {
				$scope.board[i]=[];
				for (var j = 0; j < $scope.currentLevel.y; j++) {
					$scope.board[i][j] = {content:0,predefined:false};
					if (!$scope.currentStage){
						$scope.leftTiles.push(i*$scope.currentLevel.x +j);
					}
				}
			}

			if($scope.currentStage){
				for (i = 0; i < $scope.currentStage.predefineds.length; i++) {
					$scope.board[$scope.currentStage.predefineds[i].y][$scope.currentStage.predefineds[i].x] = $scope.currentStage.predefineds[i];
				}
				$scope.coloredTiles = $scope.currentStage.predefineds.length;
			} else {
				$scope.coloredTiles = 0;
				// $timeout($scope.buildNewGame);
				$scope.buildNewGame();
			}
		} else{
			$location.path("/"+$routeParams.dificulty);
		}
	};

	$scope.buildNewGame = function(){
		while ($scope.leftTiles.length>0){
			var randomTileIndex = Math.floor(Math.random() * $scope.leftTiles.length);
			var randomTile = $scope.leftTiles[randomTileIndex];
			$scope.leftTiles.splice(randomTileIndex,1);
			var rowIndex = Math.floor(randomTile/$scope.currentLevel.x);
			var colIndex = randomTile % $scope.currentLevel.x;

			// console.log(randomTileIndex,$scope.leftTiles);
			// console.log(randomTile, Math.floor(randomTile/$scope.currentLevel.x),randomTile % $scope.currentLevel.x);
			while (($scope.leftTiles.length>0) && ($scope.board[rowIndex][colIndex].content!=0)){
				randomTileIndex = Math.floor(Math.random() * $scope.leftTiles.length);
				randomTile = $scope.leftTiles[randomTileIndex];
				$scope.leftTiles.splice(randomTileIndex,1);

				rowIndex = Math.floor(randomTile/$scope.currentLevel.x);
				colIndex = randomTile % $scope.currentLevel.x;
				// console.log(randomTile, Math.floor(randomTile/$scope.currentLevel.x),randomTile % $scope.currentLevel.x);
			}
			
			if ($scope.board[rowIndex][colIndex].content==0){
				//check if in the row\column there are alredy as meny as needed from a color
				var color = Math.floor((Math.random() * 2) + 1);
				var color1Row = 0;
				var color1Col = 0;
				var color2Row = 0;
				var color2Col = 0;

				for (var i = 0; i < $scope.board.length; i++) {
					if ($scope.board[i][colIndex].content==1){
						color1Row++;
					} else if ($scope.board[i][colIndex].content==2){
						color2Row++;
					}

					if ($scope.board[colIndex][i].content==1){
						color1Col++;
					} else if ($scope.board[colIndex][i].content==2){
						color2Col++;
					}

					// console.log("1 row:",color1Row, ", 2 row:", color2Row,", 1 col:", color1Col, ", 2 col:", color2Col);
					if ((color1Row == ($scope.currentLevel.x/2)) ||( color1Col == ($scope.currentLevel.x/2))){
						color=2;
						// console.log("chose");
					}else if ((color2Row == ($scope.currentLevel.y/2)) || (color2Col == ($scope.currentLevel.y/2))){
						color=1;
						// console.log("chose");
					}
				}

				$scope.board[rowIndex][colIndex] = {content:color, predefined:true};
				// console.log("randomly",randomTile, rowIndex,colIndex, color);
				// $scope.sleep(1000);
				$scope.concludeBoard([colIndex],[rowIndex]);
				// $scope.sleep(1000);
			}
		}

		if ($scope.verifyBoard($scope.board)){
			// $scope.printBoard($scope.board,true);
			// check for predefined and  print them
			for (i = 0; i < $scope.board.length; i++) {
				for (var j = 0; j < $scope.board.length; j++) {
					if (!$scope.board[i][j].predefined){
						$scope.board[i][j].content = 0;
					}else{
						$scope.coloredTiles++;
					}
				}
			}
		}
	};

	//Delete this
	$scope.sleep = function(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
				break;
			}
		}
	}

	$scope.concludeBoard = function(rows, columns){
		// console.log("whats left:",rows,columns);
		if (rows && rows.length > 0){
			var row = rows.pop();

			// if 2 in a row are colord the same
			for (var i = 0; i < $scope.board.length-1; i++) {
				if (($scope.board[i][row].content!=0) && ($scope.board[i][row].content ==  $scope.board[i+1][row].content)){
					var color = ($scope.board[i+1][row].content==1)?2:1;
					if ((i-1>-1) && ($scope.board[i-1][row].content==0)){
						$scope.board[i-1][row].content = color;
						// console.log(i-1, row, color,"because:",i,row,$scope.board[i][row].content, "and", i+1, row, $scope.board[i+1][row].content);
						rows.push(row);
						columns.push(i-1);
					}
					if ((i+2<$scope.board.length) && ($scope.board[i+2][row].content==0)){
						$scope.board[i+2][row].content = color;
						// console.log(i+2, row, color,"because:",i,row,$scope.board[i][row].content, "and", i+1, row, $scope.board[i+1][row].content);
						rows.push(row);
						columns.push(i+2);
					}
				}
			}

			//if color is the same as the double next and white in the middle
			for (var i = 0; i < $scope.board.length-2; i++) {
				if (($scope.board[i][row].content!=0) && ($scope.board[i+1][row].content==0) && ($scope.board[i][row].content ==  $scope.board[i+2][row].content)){
					var color = ($scope.board[i][row].content==1)?2:1;
					// console.log(i+1, row, color,"because:",i,row,$scope.board[i][row].content, "and", i+2, row, $scope.board[i+2][row].content);
					$scope.board[i+1][row].content = color;
					rows.push(row);
					columns.push(i+1);
				}
			}

			var blanks = 0;
			var color1 = 0;
			var color2 = 0;
			// if all tiles of a specified color are acountable then the rest should be colored
			for (var i = 0; i < $scope.board.length; i++) {
				if ($scope.board[i][row].content==1){
					color1++;
				} else if ($scope.board[i][row].content==2){
					color2++;
				} else if ($scope.board[i][row].content==0){
					blanks++;
				}
			}

			var colorIt = 0;
			if ((color1==($scope.board.length/2)) && (color1!=color2)){
				colorIt = 2;
			}
			if ((color2==($scope.board.length/2)) && (color1!=color2)){
				colorIt = 1;
			}
			if (colorIt!=0){
				for (var i = 0; i < $scope.board.length; i++) {
					if ($scope.board[i][row].content==0){
						$scope.board[i][row].content=colorIt;
						// console.log(i, row, colorIt);
						rows.push(row);
						columns.push(i);
					}
				}
			}

			// check if 3 blanks
			if (blanks==3) {
				// console.log("blanks!");
				var mostColord=(color1>color2)?1:2;
				var lessColord=(color1>color2)?2:1;
				var firstOk = true;
				var firstSet = false;
				// console.log("mostColord:",mostColord);
				// console.log("lessColord:",lessColord);

				for (var i = 0; i < $scope.board.length-2; i++) {
					if (firstSet) {
						if ((firstOk) && ((i+2)<$scope.board.length)){
							// console.log("check",i,row);
							firstOk = !((($scope.board[i][row].content==lessColord)||($scope.board[i][row].content==0)) && 
								(($scope.board[i+1][row].content==lessColord) || ($scope.board[i+1][row].content==0)) && 
								(($scope.board[i+2][row].content==lessColord) || ($scope.board[i+2][row].content==0)) );
							// console.log("threecheck",$scope.board[i][row].content,$scope.board[i+1][row].content,$scope.board[i+2][row].content);
							// console.log("threecheck",firstOk);
						}
					} else if ($scope.board[i][row].content==0){
						firstSet=true;
					}
				}

				var thirdOk = true;
				for (var i = 0; i < $scope.board.length-2; i++) {
					if ((i+2)<$scope.board.length) {
						// console.log("check2",i,row);
						if ((thirdOk) && ($scope.board[i][row].content==lessColord)){
							thirdOk = !(($scope.board[i+1][row].content!=mostColord) && ($scope.board[i+2][row].content!=mostColord));
							// console.log("threecheck",$scope.board[i][row].content,$scope.board[i+1][row].content,$scope.board[i+2][row].content);
							// console.log("threecheck000000000000000000000000000000",thirdOk);
						} else if ((thirdOk) && ($scope.board[i][row].content==0)){
							thirdOk = !( (($scope.board[i+1][row].content==lessColord) && ($scope.board[i+2][row].content==0)) || (($scope.board[i+1][row].content==0) && ($scope.board[i+2][row].content==lessColord)));
							// console.log("threecheck",$scope.board[i][row].content,$scope.board[i+1][row].content,$scope.board[i+2][row].content);
							// console.log("threecheck",thirdOk);
							if (!(($scope.board[i][row].content==0) && ($scope.board[i+1][row].content==0) && ($scope.board[i+1][row].content==0))){
								break;
							}
						}
					}
				}


				if (!thirdOk && !firstOk){
					var firstSet = false;
					for (var i = 0; i < $scope.board.length; i++) {
						if ($scope.board[i][row].content == 0){
							if (!firstSet){
								$scope.board[i][row].content=lessColord;
								firstSet = true;
								// console.log("threeee",i, row, lessColord);
								rows.push(row);
								columns.push(i);
							} else{
								$scope.board[i][row].content=mostColord;
								firstSet = false;
								// console.log("threeee",i, row, mostColord);
								rows.push(row);
								columns.push(i);
							}
							
						}
					}
				}else if (!firstOk){
					for (var i = 0; i < $scope.board.length; i++) {
						if ($scope.board[i][row].content == 0){
							$scope.board[i][row].content=lessColord;
							// console.log("threeee",i, row, lessColord);
							rows.push(row);
							columns.push(i);
							break;
						}
					}
				}else if (!thirdOk){
					for (var i = $scope.board.length-1; i >= 0; i--) {
						if ($scope.board[i][row].content == 0){
							$scope.board[i][row].content=lessColord;
							// console.log("threeee",i, row, lessColord);
							rows.push(row);
							columns.push(i);
							break;
						}
					}
				}
			}


			$scope.concludeBoard($scope.arrayUnique(rows), $scope.arrayUnique(columns));
		}else if (columns && columns.length > 0){
			var col = columns.pop();
			// if 2 in a row are colord the same
			for (var i = 0; i < $scope.board.length-1; i++) {
				if (($scope.board[col][i].content!=0) && ($scope.board[col][i].content ==  $scope.board[col][i+1].content)){
					var color = $scope.board[col][i+1].content==1?2:1;
					if ((i-1>-1) && ($scope.board[col][i-1].content==0)){
						$scope.board[col][i-1].content = color;
						// console.log(col, i-1, color, "because:",col,i,$scope.board[col][i].content, "and", col, i+1, $scope.board[col][i+1].content);
						rows.push(i-1);
						columns.push(col);
					}
					if ((i+2<$scope.board.length) && ($scope.board[col][i+2].content==0)){
						$scope.board[col][i+2].content = color;
						// console.log(col, i+2, color, "because:",col,i,$scope.board[col][i].content, "and", col, i+1, $scope.board[col][i+1].content);
						rows.push(i+2);
						columns.push(col);
					}
				}
			}

			//if color is the same as the double next and white in the middle
			for (var i = 0; i < $scope.board.length-2; i++) {
				if (($scope.board[col][i].content!=0) && ($scope.board[col][i+1].content ==0) && ($scope.board[col][i].content ==  $scope.board[col][i+2].content)){
					var color = $scope.board[col][i].content==1?2:1;
					$scope.board[col][i+1].content = color;
					// console.log(col, i+1, color,"because:",col, i,$scope.board[col][i].content, "and", col, i+2, $scope.board[col][i+2].content);
					rows.push(i+1);
					columns.push(col);
				}
			}

			var blanks = 0;
			var color1 = 0;
			var color2 = 0;
			// if all tiles of a specified color are acountable then the rest should be colored
			for (var i = 0; i < $scope.board.length; i++) {
				if ($scope.board[col][i].content==1){
					color1++;
				} else if ($scope.board[col][i].content==2){
					color2++;
				} else if ($scope.board[col][i].content==0){
					blanks++;
				}
			}

			var colorIt = 0;
			if ((color1==($scope.board.length/2)) && (color1!=color2)){
				colorIt = 2;
			}
			if ((color2==($scope.board.length/2)) && (color1!=color2)){
				colorIt = 1;
			}
			if (colorIt!=0){
				for (var i = 0; i < $scope.board.length; i++) {
					if ($scope.board[col][i].content==0){
						$scope.board[col][i].content=colorIt;
						// console.log(col, i, colorIt);
						rows.push(i);
						columns.push(col);
					}
				}
			}

			// check if 3 blanks
			if (blanks==3) {
				var mostColord=(color1>color2)?1:2;
				var lessColord=(color1>color2)?2:1;
				var firstOk = true;
				var firstSet = false;
				// console.log("mostColord:",mostColord);
				// console.log("lessColord:",lessColord);

				for (var i = 0; i < $scope.board.length; i++) {
					if ((firstOk) && (firstSet) && ((i+2)<$scope.board.length)){
						// console.log("check",col,i, $scope.board[col][i]);
						firstOk = !((($scope.board[col][i].content==lessColord)||($scope.board[col][i].content==0)) && 
							(($scope.board[col][i+1].content==lessColord) || ($scope.board[col][i+1].content==0)) && 
							(($scope.board[col][i+2].content==lessColord) || ($scope.board[col][i+2].content==0)) );
						// console.log("threecheck",$scope.board[col][i].content,$scope.board[col][i+1].content,$scope.board[col][i+2].content);
						// console.log("threecheck",firstOk);
					} else if ($scope.board[col][i].content==0){
						firstSet=true;
					}
				}

				var thirdOk = true;
				for (var i = 0; i < $scope.board.length; i++) {
					if ((i+2)<$scope.board.length) {
						// console.log("check2",col,i);
						if ((thirdOk) && ($scope.board[col][i].content==lessColord)){
							thirdOk = !( ($scope.board[col][i+1].content!=mostColord) && ($scope.board[col][i+2].content!=mostColord) );
							// console.log("threecheck1111111111111111",$scope.board[col][i].content,$scope.board[col][i+1].content,$scope.board[col][i+1].content);
							// console.log("threecheck",thirdOk);
						} else if (thirdOk && $scope.board[col][i].content==0){
							thirdOk = !( (($scope.board[col][i+1].content==lessColord) && ($scope.board[col][i+2].content==0)) || (($scope.board[col][i+1].content==0) && ($scope.board[col][i+2].content==lessColord)));
							// console.log("threecheck",$scope.board[col][i].content,$scope.board[col][i+1].content,$scope.board[col][i+1].content);
							// console.log("threecheck",thirdOk);
							if (!(($scope.board[col][i].content==0) && ($scope.board[col][i+1].content==0) && ($scope.board[col][i+1].content==0))){
								break;
							}
						}
					}
				}

				if (!thirdOk && !firstOk){
					var firstSet = false;
					for (var i = 0; i < $scope.board.length; i++) {
						if ($scope.board[col][i].content == 0){
							if (!firstSet){
								$scope.board[col][i].content=lessColord;
								firstSet = true;
								// console.log("threeee",col, i, lessColord);
								rows.push(i);
								columns.push(col);
							} else{
								$scope.board[col][i].content=mostColord;
								firstSet = false;
								// console.log("threeee",col, i, mostColord);
								rows.push(i);
								columns.push(col);
							}
							
						}
					}
				}else if (!firstOk){
					for (var i = 0; i < $scope.board.length; i++) {
						if ($scope.board[col][i].content == 0){
							$scope.board[col][i].content=lessColord;
							// console.log("threeee",col, i, lessColord);
							rows.push(i);
							columns.push(col);
							break;
						}
					}
				}else if (!thirdOk){
					for (var i = $scope.board.length-1; i >= 0; i--) {
						if ($scope.board[col][i].content == 0){
							$scope.board[col][i].content=lessColord;
							// console.log("threeee",col, i, lessColord);
							rows.push(i);
							columns.push(col);
							break;
						}
					}
				}
			}
			$scope.concludeBoard($scope.arrayUnique(rows), $scope.arrayUnique(columns));
		}
	};

	$scope.arrayUnique = function(a) {
		return a.reduce(function(p, c) {
			if (p.indexOf(c) < 0) 
				p.push(c);
			return p;
		}, []);
	};



	$scope.printBoard = function(board, real){
		var boardString=[];
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board.length; j++) {
				if (board[i][j].content!=0){
					if (real){
						if (board[i][j].predefined){
							boardString.push({content:board[i][j].content,predefined:board[i][j].predefined, x:j,y:i});
						}
					}else{
						boardString.push({content:board[i][j].content,predefined:true,x:j,y:i});
					}
				}
			}
		}
		console.log(boardString.length,JSON.stringify(boardString));
		return boardString;
	};

	$scope.color = function(x, y){
		if (!$scope.board[x][y].predefined){
			$scope.board[x][y].content++;
			if ($scope.board[x][y].content>2){
				$scope.board[x][y].content=0;
				$scope.coloredTiles--;
			} else if ($scope.board[x][y].content==1){
				$scope.coloredTiles++;
			}

			// $scope.printBoard($scope.board);

			if($scope.coloredTiles==$scope.currentLevel.x*$scope.currentLevel.y){
				if($scope.verifyBoard($scope.board)){
					if ($scope.currentStage){
						$scope.currentStage.done = true;

						var complete = JSON.parse(localStorage.getItem("complete"));
						if (!complete){
							complete = {};
						}
						if (!complete[$routeParams.dificulty]){
							complete[$routeParams.dificulty] = [];
						}
						complete[$routeParams.dificulty].push($routeParams.level-1);

						localStorage.setItem("complete", JSON.stringify(complete));
					}
					// set in local storage
					$location.path("/success");
				}
			} else{
				var rcErr=$scope.verifyRowAndColumn($scope.board, x, y);
				// row and column wrong
				if (rcErr==3){
					for (var i = 0; i < $scope.board.length; i++) {
						$scope.board[i][y].error = true;
						$scope.board[x][i].error = true;
					}
				// column wrong
				}else if (rcErr==2){
					for (var i = 0; i < $scope.board.length; i++) {
						$scope.board[x][i].error = true;
						$scope.board[i][y].error = false;
					}
				// row wrong
				}else if (rcErr==1){
					for (var i = 0; i < $scope.board.length; i++) {
						$scope.board[i][y].error = true;
						$scope.board[x][i].error = false;
					}
				}else{
					for (var i = 0; i < $scope.board.length; i++) {
						$scope.board[i][y].error = false;
						$scope.board[x][i].error = false;
					}
				}
			}
		}
	};

	$scope.verifyRowAndColumn = function(board, x, y){
		var xCont = 0;
		var yCont = 0;
		var columnErr = false;

		for (var i = 0; i < board[x].length; i++) {
			if (board[x][i].content == 1){
				xCont++;
			}else if (board[x][i].content == 2){
				yCont++;
			}

			if ((xCont+yCont==board[x].length) && (xCont!=yCont)){
				columnErr = true;
			}
		}

		xCont = 0;
		yCont = 0;

		for (i = 0; i < board.length; i++) {
			if (board[i][y].content == 1){
				xCont++;
			}else if (board[i][y].content == 2){
				yCont++;
			}

			if ((xCont+yCont==board.length) && (xCont!=yCont)){
				if (columnErr){
					return 3;
				}
				return 1;
			}
		}

		if (columnErr){
			return 2;
		}

		return 0;
	};

	$scope.verifyBoard = function(board){
		var allOk = true;

		for (var i = 0; i < board.length && allOk; i++) {
			allOk = allOk && ($scope.verifyRowAndColumn(board,i,i)==0);
		};

		for (var i = 0; i < board.length-2 && allOk; i++) {
			for (var j = 0; j < board[i].length-2 && allOk; j++) {
				allOk = allOk && (board[i][j].content != board[i+1][j].content) || (board[i][j].content != board[i+2][j].content);
				allOk = allOk && (board[i][j].content != board[i][j+1].content) || (board[i][j].content != board[i][j+2].content);
			}
		}

		// check only the right two to the buttom
		for (var i = board.length-2; i < board.length && allOk; i++) {
			for (var j = 0; j < board[i].length-2 && allOk; j++) {
				allOk = allOk && (board[i][j].content != board[i][j+1].content) || (board[i][j].content != board[i][j+2].content);
			}
		}
		
		// check only the buttom two to the right
		for (var i = 0; i < board.length-2 && allOk; i++) {
			for (var j = board[i].length-2; j < board[i].length && allOk; j++) {
				allOk = allOk && (board[i][j].content != board[i+1][j].content) || (board[i][j].content != board[i+2][j].content);
			}
		}

		return allOk;
	};

	$scope.reveille = function(){
		var complete = JSON.parse(localStorage.getItem("complete"));
		var completedLevels = 0;
		if (complete){
			for (var dificulty in complete) {
				completedLevels+=complete[dificulty].length;
			};
		}
		$timeout(function(){
			$scope.completedCount = {"top":(completedLevels / $scope.levelCount * 100) + "%"};
		},10);
	};
	
	$scope.homePage = function(){
		$location.path("/");
	};
}];


xoxo.controller(controllers);