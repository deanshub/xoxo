'use strict';
var xoxo = angular.module('xoxo.controllers',['xoxo.services']);

var controllers={};

controllers.introCtrl = ['$scope', '$location', '$routeParams', '$timeout', 'General', function ($scope, $location, $routeParams, $timeout, General) {
	$scope.dificulties = [{name:"8X8",x:8,y:8,color:"green",levels:[
			{predefineds:[{content:1,predefined:true,x:3,y:0},{content:1,predefined:true,x:5,y:0},{content:1,predefined:true,x:1,y:1},{content:1,predefined:true,x:4,y:2},{content:1,predefined:true,x:5,y:2},{content:1,predefined:true,x:7,y:2},{content:2,predefined:true,x:2,y:3},{content:2,predefined:true,x:6,y:3},{content:1,predefined:true,x:0,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:3,y:5},{content:1,predefined:true,x:6,y:5},{content:1,predefined:true,x:7,y:5},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:2,y:7},{content:2,predefined:true,x:6,y:7}]},
			{predefineds:[{content:2,predefined:true,x:0,y:3},{content:2,predefined:true,x:0,y:4},{content:1,predefined:true,x:1,y:1},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:2,y:0},{content:1,predefined:true,x:3,y:2},{content:1,predefined:true,x:3,y:5},{content:2,predefined:true,x:3,y:6},{content:2,predefined:true,x:4,y:1},{content:1,predefined:true,x:4,y:7},{content:1,predefined:true,x:5,y:1},{content:1,predefined:true,x:5,y:3},{content:2,predefined:true,x:6,y:6},{content:1,predefined:true,x:7,y:0},{content:1,predefined:true,x:7,y:4},{content:2,predefined:true,x:7,y:5}]},
			{predefineds:[{content:2,predefined:true,x:1,y:0},{content:2,predefined:true,x:1,y:1},{content:1,predefined:true,x:3,y:1},{content:2,predefined:true,x:6,y:1},{content:1,predefined:true,x:5,y:2},{content:2,predefined:true,x:3,y:3},{content:1,predefined:true,x:7,y:3},{content:1,predefined:true,x:0,y:4},{content:2,predefined:true,x:5,y:4},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:3,y:6},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:7,y:6},{content:1,predefined:true,x:7,y:7}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:1,predefined:true,x:2,y:0},{content:2,predefined:true,x:3,y:0},{content:2,predefined:true,x:0,y:1},{content:1,predefined:true,x:5,y:1},{content:2,predefined:true,x:3,y:2},{content:1,predefined:true,x:7,y:2},{content:1,predefined:true,x:1,y:3},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:6,y:3},{content:2,predefined:true,x:6,y:4},{content:2,predefined:true,x:3,y:5},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:7,y:6},{content:1,predefined:true,x:0,y:7}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:2,predefined:true,x:2,y:0},{content:1,predefined:true,x:5,y:0},{content:2,predefined:true,x:7,y:1},{content:2,predefined:true,x:3,y:2},{content:1,predefined:true,x:0,y:3},{content:2,predefined:true,x:2,y:4},{content:2,predefined:true,x:5,y:4},{content:2,predefined:true,x:5,y:5},{content:1,predefined:true,x:7,y:5},{content:1,predefined:true,x:1,y:6},{content:1,predefined:true,x:7,y:6},{content:1,predefined:true,x:1,y:7},{content:1,predefined:true,x:5,y:7}]},
			{predefineds:[{content:2,predefined:true,x:6,y:0},{content:1,predefined:true,x:2,y:1},{content:1,predefined:true,x:4,y:1},{content:1,predefined:true,x:2,y:2},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:6,y:3},{content:2,predefined:true,x:3,y:4},{content:2,predefined:true,x:1,y:5},{content:1,predefined:true,x:2,y:5},{content:1,predefined:true,x:6,y:5},{content:1,predefined:true,x:4,y:6},{content:2,predefined:true,x:5,y:6},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:2,y:7}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:1,predefined:true,x:3,y:0},{content:1,predefined:true,x:4,y:1},{content:2,predefined:true,x:6,y:1},{content:2,predefined:true,x:7,y:1},{content:2,predefined:true,x:4,y:2},{content:2,predefined:true,x:1,y:3},{content:1,predefined:true,x:5,y:3},{content:1,predefined:true,x:7,y:3},{content:2,predefined:true,x:1,y:4},{content:1,predefined:true,x:4,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:2,y:6},{content:1,predefined:true,x:0,y:7},{content:2,predefined:true,x:6,y:7}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:2,predefined:true,x:4,y:0},{content:2,predefined:true,x:2,y:1},{content:1,predefined:true,x:6,y:1},{content:2,predefined:true,x:0,y:2},{content:2,predefined:true,x:3,y:2},{content:2,predefined:true,x:1,y:3},{content:1,predefined:true,x:4,y:3},{content:1,predefined:true,x:6,y:3},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:6,y:6},{content:1,predefined:true,x:7,y:6},{content:1,predefined:true,x:2,y:7},{content:2,predefined:true,x:4,y:7},{content:2,predefined:true,x:5,y:7}]},
			{predefineds:[{content:2,predefined:true,x:1,y:0},{content:1,predefined:true,x:2,y:0},{content:1,predefined:true,x:4,y:0},{content:1,predefined:true,x:6,y:0},
						{content:1,predefined:true,x:0,y:1},{content:2,predefined:true,x:3,y:1},{content:1,predefined:true,x:6,y:1},
						{content:1,predefined:true,x:1,y:3},{content:2,predefined:true,x:4,y:3},{content:2,predefined:true,x:5,y:3},
						{content:2,predefined:true,x:1,y:4},{content:1,predefined:true,x:7,y:4},
						{content:2,predefined:true,x:0,y:5},{content:1,predefined:true,x:5,y:5},
						{content:1,predefined:true,x:2,y:6},{content:1,predefined:true,x:7,y:6},
						{content:2,predefined:true,x:0,y:7}]}
		]},
					{name:"10X10",x:10,y:10,color:"yellow",levels:[
			{predefineds:[{content:1,predefined:true,x:2,y:0},{content:1,predefined:true,x:6,y:0},
				{content:1,predefined:true,x:6,y:1},{content:1,predefined:true,x:7,y:1},
				{content:2,predefined:true,x:1,y:2},
				{content:2,predefined:true,x:5,y:3},{content:2,predefined:true,x:7,y:3},
				{content:2,predefined:true,x:1,y:4},{content:1,predefined:true,x:2,y:4},{content:2,predefined:true,x:9,y:4},
				{content:2,predefined:true,x:4,y:6},{content:1,predefined:true,x:7,y:6},
				{content:1,predefined:true,x:5,y:7},{content:1,predefined:true,x:6,y:7},{content:1,predefined:true,x:9,y:7},
				{content:2,predefined:true,x:1,y:8},{content:2,predefined:true,x:8,y:8},
				{content:2,predefined:true,x:0,y:9},{content:2,predefined:true,x:1,y:9},{content:2,predefined:true,x:4,y:9}]},
			{predefineds:[{content:1,predefined:true,x:5,y:0},{content:1,predefined:true,x:3,y:1},{content:2,predefined:true,x:4,y:1},{content:2,predefined:true,x:8,y:1},{content:2,predefined:true,x:0,y:2},{content:1,predefined:true,x:6,y:2},{content:2,predefined:true,x:4,y:3},{content:1,predefined:true,x:8,y:3},{content:1,predefined:true,x:1,y:4},{content:2,predefined:true,x:7,y:4},{content:2,predefined:true,x:6,y:5},{content:2,predefined:true,x:8,y:5},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:3,y:6},{content:2,predefined:true,x:5,y:6},{content:1,predefined:true,x:7,y:7},{content:2,predefined:true,x:6,y:8},{content:1,predefined:true,x:8,y:8},{content:1,predefined:true,x:2,y:9},{content:1,predefined:true,x:4,y:9}]},
			{predefineds:[{content:1,predefined:true,x:1,y:1},{content:2,predefined:true,x:2,y:1},{content:1,predefined:true,x:4,y:1},{content:2,predefined:true,x:6,y:1},{content:1,predefined:true,x:8,y:1},{content:2,predefined:true,x:9,y:2},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:7,y:3},{content:1,predefined:true,x:8,y:4},{content:2,predefined:true,x:4,y:5},{content:1,predefined:true,x:9,y:5},{content:2,predefined:true,x:1,y:6},{content:2,predefined:true,x:5,y:6},{content:1,predefined:true,x:7,y:6},{content:2,predefined:true,x:2,y:7},{content:1,predefined:true,x:3,y:7},{content:2,predefined:true,x:8,y:7},{content:1,predefined:true,x:5,y:8},{content:2,predefined:true,x:7,y:8},{content:2,predefined:true,x:8,y:8},{content:2,predefined:true,x:0,y:9}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:1,predefined:true,x:4,y:0},{content:1,predefined:true,x:6,y:0},{content:2,predefined:true,x:0,y:1},{content:1,predefined:true,x:5,y:1},{content:1,predefined:true,x:9,y:1},{content:1,predefined:true,x:1,y:2},{content:2,predefined:true,x:7,y:2},{content:1,predefined:true,x:1,y:3},{content:2,predefined:true,x:9,y:3},{content:2,predefined:true,x:5,y:4},{content:1,predefined:true,x:7,y:4},{content:2,predefined:true,x:9,y:4},{content:2,predefined:true,x:4,y:5},{content:2,predefined:true,x:1,y:6},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:4,y:8},{content:2,predefined:true,x:3,y:9},{content:1,predefined:true,x:8,y:9},{content:1,predefined:true,x:9,y:9}]},
			{predefineds:[{content:1,predefined:true,x:4,y:0},{content:2,predefined:true,x:9,y:0},{content:1,predefined:true,x:7,y:1},{content:2,predefined:true,x:9,y:1},{content:1,predefined:true,x:2,y:2},{content:1,predefined:true,x:3,y:3},{content:2,predefined:true,x:4,y:3},{content:1,predefined:true,x:5,y:3},{content:1,predefined:true,x:6,y:3},{content:2,predefined:true,x:7,y:3},{content:1,predefined:true,x:8,y:3},{content:2,predefined:true,x:1,y:5},{content:2,predefined:true,x:8,y:5},{content:2,predefined:true,x:5,y:6},{content:2,predefined:true,x:2,y:7},{content:1,predefined:true,x:7,y:7},{content:2,predefined:true,x:8,y:7},{content:1,predefined:true,x:7,y:8},{content:1,predefined:true,x:0,y:9},{content:2,predefined:true,x:4,y:9}]},
			{predefineds:[{content:2,predefined:true,x:5,y:0},{content:1,predefined:true,x:7,y:1},{content:1,predefined:true,x:1,y:2},{content:2,predefined:true,x:4,y:2},{content:1,predefined:true,x:7,y:2},{content:1,predefined:true,x:3,y:3},{content:1,predefined:true,x:2,y:4},{content:2,predefined:true,x:8,y:4},{content:2,predefined:true,x:9,y:4},{content:1,predefined:true,x:2,y:5},{content:2,predefined:true,x:5,y:5},{content:2,predefined:true,x:9,y:6},{content:2,predefined:true,x:1,y:7},{content:1,predefined:true,x:5,y:7},{content:1,predefined:true,x:6,y:7},{content:1,predefined:true,x:8,y:7},{content:2,predefined:true,x:5,y:8},{content:2,predefined:true,x:1,y:9},{content:1,predefined:true,x:6,y:9},{content:2,predefined:true,x:9,y:9}]},
			// {predefineds:[{content:2,predefined:true,x:5,y:0},{content:2,predefined:true,x:8,y:0},{content:2,predefined:true,x:2,y:1},{content:1,predefined:true,x:5,y:2},{content:1,predefined:true,x:0,y:3},{content:1,predefined:true,x:2,y:3},{content:2,predefined:true,x:4,y:3},{content:2,predefined:true,x:6,y:4},{content:2,predefined:true,x:2,y:5},{content:1,predefined:true,x:4,y:5},{content:1,predefined:true,x:7,y:5},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:2,y:7},{content:2,predefined:true,x:4,y:7},{content:1,predefined:true,x:6,y:7},{content:1,predefined:true,x:9,y:7},{content:1,predefined:true,x:3,y:8},{content:2,predefined:true,x:0,y:9},{content:1,predefined:true,x:5,y:9},{content:2,predefined:true,x:9,y:9}]},
			// {predefineds:[{content:2,predefined:true,x:0,y:0},{content:1,predefined:true,x:8,y:0},{content:1,predefined:true,x:9,y:0},{content:2,predefined:true,x:1,y:1},{content:1,predefined:true,x:4,y:1},{content:2,predefined:true,x:1,y:3},{content:2,predefined:true,x:3,y:3},{content:2,predefined:true,x:7,y:3},{content:2,predefined:true,x:8,y:3},{content:1,predefined:true,x:9,y:4},{content:1,predefined:true,x:0,y:6},{content:1,predefined:true,x:1,y:6},{content:1,predefined:true,x:8,y:6},{content:2,predefined:true,x:5,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:3,y:8},{content:2,predefined:true,x:4,y:8},{content:1,predefined:true,x:8,y:8},{content:1,predefined:true,x:0,y:9},{content:1,predefined:true,x:1,y:9},{content:2,predefined:true,x:9,y:9}]},
			{predefineds:[{content:1,predefined:true,x:1,y:0},{content:2,predefined:true,x:5,y:0},{content:1,predefined:true,x:1,y:1},{content:2,predefined:true,x:6,y:1},{content:2,predefined:true,x:1,y:2},{content:2,predefined:true,x:8,y:2},{content:2,predefined:true,x:9,y:2},{content:1,predefined:true,x:6,y:3},{content:1,predefined:true,x:2,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:8,y:4},{content:1,predefined:true,x:3,y:5},{content:1,predefined:true,x:6,y:6},{content:2,predefined:true,x:0,y:7},{content:2,predefined:true,x:2,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:1,y:8},{content:1,predefined:true,x:4,y:8},{content:1,predefined:true,x:5,y:8},{content:2,predefined:true,x:8,y:9}]}
		]},
					{name:"12X12",x:12,y:12,color:"red",levels:[
			{predefineds:[{content:1,predefined:true,x:5,y:0},{content:2,predefined:true,x:8,y:0},{content:1,predefined:true,x:1,y:1},{content:1,predefined:true,x:3,y:2},{content:2,predefined:true,x:5,y:2},{content:2,predefined:true,x:6,y:2},{content:1,predefined:true,x:11,y:2},{content:1,predefined:true,x:7,y:3},{content:2,predefined:true,x:1,y:4},{content:1,predefined:true,x:8,y:4},{content:2,predefined:true,x:11,y:5},{content:1,predefined:true,x:7,y:6},{content:2,predefined:true,x:1,y:7},{content:1,predefined:true,x:3,y:7},{content:2,predefined:true,x:5,y:7},{content:2,predefined:true,x:9,y:8},{content:2,predefined:true,x:2,y:9},{content:2,predefined:true,x:5,y:9},{content:1,predefined:true,x:11,y:9},{content:1,predefined:true,x:0,y:10},{content:2,predefined:true,x:8,y:10},{content:1,predefined:true,x:4,y:11},{content:2,predefined:true,x:7,y:11},{content:1,predefined:true,x:10,y:11}]},
			{predefineds:[{content:2,predefined:true,x:0,y:0},{content:2,predefined:true,x:1,y:0},{content:1,predefined:true,x:11,y:0},{content:2,predefined:true,x:7,y:1},{content:1,predefined:true,x:11,y:1},{content:1,predefined:true,x:2,y:3},{content:2,predefined:true,x:5,y:3},{content:2,predefined:true,x:9,y:4},{content:1,predefined:true,x:1,y:5},{content:1,predefined:true,x:7,y:5},{content:2,predefined:true,x:3,y:6},{content:2,predefined:true,x:4,y:6},{content:1,predefined:true,x:11,y:6},{content:1,predefined:true,x:5,y:7},{content:2,predefined:true,x:6,y:7},{content:2,predefined:true,x:8,y:7},{content:2,predefined:true,x:9,y:7},{content:1,predefined:true,x:9,y:9},{content:1,predefined:true,x:0,y:10},{content:1,predefined:true,x:3,y:10},{content:1,predefined:true,x:8,y:10},{content:1,predefined:true,x:0,y:11},{content:2,predefined:true,x:10,y:11},{content:2,predefined:true,x:11,y:11}]},
			{predefineds:[{content:1,predefined:true,x:0,y:0},{content:2,predefined:true,x:1,y:1},{content:2,predefined:true,x:3,y:1},{content:2,predefined:true,x:4,y:1},{content:2,predefined:true,x:8,y:2},{content:1,predefined:true,x:2,y:3},{content:1,predefined:true,x:6,y:3},{content:2,predefined:true,x:9,y:3},{content:1,predefined:true,x:1,y:4},{content:1,predefined:true,x:4,y:4},{content:2,predefined:true,x:4,y:6},{content:2,predefined:true,x:5,y:6},{content:1,predefined:true,x:7,y:6},{content:2,predefined:true,x:0,y:7},{content:1,predefined:true,x:3,y:7},{content:1,predefined:true,x:8,y:7},{content:1,predefined:true,x:9,y:7},{content:2,predefined:true,x:11,y:7},{content:1,predefined:true,x:4,y:9},{content:2,predefined:true,x:6,y:9},{content:1,predefined:true,x:10,y:9},{content:2,predefined:true,x:1,y:10},{content:1,predefined:true,x:3,y:10},{content:2,predefined:true,x:6,y:10},{content:1,predefined:true,x:10,y:10}]},
			{predefineds:[{content:2,predefined:true,x:6,y:0},{content:2,predefined:true,x:11,y:0},{content:2,predefined:true,x:3,y:1},{content:2,predefined:true,x:4,y:2},{content:2,predefined:true,x:5,y:2},{content:1,predefined:true,x:7,y:2},{content:1,predefined:true,x:8,y:2},{content:1,predefined:true,x:1,y:3},{content:1,predefined:true,x:11,y:3},{content:2,predefined:true,x:8,y:4},{content:2,predefined:true,x:9,y:4},{content:1,predefined:true,x:3,y:5},{content:2,predefined:true,x:11,y:5},{content:1,predefined:true,x:1,y:6},{content:2,predefined:true,x:6,y:6},{content:2,predefined:true,x:7,y:6},{content:1,predefined:true,x:9,y:6},{content:1,predefined:true,x:7,y:8},{content:2,predefined:true,x:2,y:9},{content:2,predefined:true,x:0,y:10},{content:1,predefined:true,x:4,y:10},{content:1,predefined:true,x:5,y:10},{content:1,predefined:true,x:7,y:10},{content:1,predefined:true,x:9,y:10},{content:2,predefined:true,x:11,y:10}]}
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

		for (i = 0; i < $scope.currentLevel.x; i++) {
			$scope.board[i]=[];
			for (var j = 0; j < $scope.currentLevel.y; j++) {
				$scope.board[i][j] = {content:0,predefined:false};
			}
		}
		for (i = 0; i < $scope.currentStage.predefineds.length; i++) {
			$scope.board[$scope.currentStage.predefineds[i].y][$scope.currentStage.predefineds[i].x] = $scope.currentStage.predefineds[i];
		}
		$scope.coloredTiles = $scope.currentStage.predefineds.length;
	};

	$scope.printBoard = function(board){
		var boardString=[];
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board.length; j++) {
				if (board[i][j].content!=0){
					boardString.push({content:board[i][j].content,predefined:true,x:j,y:i});
				}
			}
		}
		console.log(boardString.length,JSON.stringify(boardString));
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

			$scope.printBoard($scope.board);

			if($scope.coloredTiles==$scope.currentLevel.x*$scope.currentLevel.y){
				if($scope.verifyBoard($scope.board)){
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