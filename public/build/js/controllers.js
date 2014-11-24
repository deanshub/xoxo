"use strict";var xoxo=angular.module("xoxo.controllers",["xoxo.services"]),controllers={};controllers.introCtrl=["$scope","$location","$routeParams","$timeout","General",function(e,n,t,d){e.dificulties=[{name:"8X8",x:8,y:8,color:"green",levels:[{predefineds:[{content:1,predefined:!0,x:3,y:0},{content:1,predefined:!0,x:5,y:0},{content:1,predefined:!0,x:1,y:1},{content:1,predefined:!0,x:4,y:2},{content:1,predefined:!0,x:5,y:2},{content:1,predefined:!0,x:7,y:2},{content:2,predefined:!0,x:2,y:3},{content:2,predefined:!0,x:6,y:3},{content:1,predefined:!0,x:0,y:4},{content:1,predefined:!0,x:4,y:4},{content:2,predefined:!0,x:3,y:5},{content:1,predefined:!0,x:6,y:5},{content:1,predefined:!0,x:7,y:5},{content:1,predefined:!0,x:1,y:6},{content:2,predefined:!0,x:2,y:7},{content:2,predefined:!0,x:6,y:7}]},{predefineds:[{content:2,predefined:!0,x:0,y:3},{content:2,predefined:!0,x:0,y:4},{content:1,predefined:!0,x:1,y:1},{content:1,predefined:!0,x:1,y:6},{content:2,predefined:!0,x:2,y:0},{content:1,predefined:!0,x:3,y:2},{content:1,predefined:!0,x:3,y:5},{content:2,predefined:!0,x:3,y:6},{content:2,predefined:!0,x:4,y:1},{content:1,predefined:!0,x:4,y:7},{content:1,predefined:!0,x:5,y:1},{content:1,predefined:!0,x:5,y:3},{content:2,predefined:!0,x:6,y:6},{content:1,predefined:!0,x:7,y:0},{content:1,predefined:!0,x:7,y:4},{content:2,predefined:!0,x:7,y:5}]},{predefineds:[{content:2,predefined:!0,x:1,y:0},{content:2,predefined:!0,x:1,y:1},{content:1,predefined:!0,x:3,y:1},{content:2,predefined:!0,x:6,y:1},{content:1,predefined:!0,x:5,y:2},{content:2,predefined:!0,x:3,y:3},{content:1,predefined:!0,x:7,y:3},{content:1,predefined:!0,x:0,y:4},{content:2,predefined:!0,x:5,y:4},{content:1,predefined:!0,x:3,y:5},{content:1,predefined:!0,x:7,y:5},{content:2,predefined:!0,x:1,y:6},{content:1,predefined:!0,x:3,y:6},{content:1,predefined:!0,x:6,y:6},{content:2,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:7,y:7}]},{predefineds:[{content:2,predefined:!0,x:0,y:0},{content:1,predefined:!0,x:2,y:0},{content:2,predefined:!0,x:3,y:0},{content:2,predefined:!0,x:0,y:1},{content:1,predefined:!0,x:5,y:1},{content:2,predefined:!0,x:3,y:2},{content:1,predefined:!0,x:7,y:2},{content:1,predefined:!0,x:1,y:3},{content:1,predefined:!0,x:3,y:3},{content:1,predefined:!0,x:6,y:3},{content:2,predefined:!0,x:6,y:4},{content:2,predefined:!0,x:3,y:5},{content:2,predefined:!0,x:1,y:6},{content:1,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:0,y:7}]},{predefineds:[{content:1,predefined:!0,x:0,y:0},{content:2,predefined:!0,x:2,y:0},{content:1,predefined:!0,x:5,y:0},{content:2,predefined:!0,x:7,y:1},{content:2,predefined:!0,x:3,y:2},{content:1,predefined:!0,x:0,y:3},{content:2,predefined:!0,x:2,y:4},{content:2,predefined:!0,x:5,y:4},{content:2,predefined:!0,x:5,y:5},{content:1,predefined:!0,x:7,y:5},{content:1,predefined:!0,x:1,y:6},{content:1,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:1,y:7},{content:1,predefined:!0,x:5,y:7}]},{predefineds:[{content:2,predefined:!0,x:6,y:0},{content:1,predefined:!0,x:2,y:1},{content:1,predefined:!0,x:4,y:1},{content:1,predefined:!0,x:2,y:2},{content:2,predefined:!0,x:3,y:2},{content:2,predefined:!0,x:4,y:2},{content:1,predefined:!0,x:6,y:3},{content:2,predefined:!0,x:3,y:4},{content:2,predefined:!0,x:1,y:5},{content:1,predefined:!0,x:2,y:5},{content:1,predefined:!0,x:6,y:5},{content:1,predefined:!0,x:4,y:6},{content:2,predefined:!0,x:5,y:6},{content:1,predefined:!0,x:6,y:6},{content:2,predefined:!0,x:2,y:7}]},{predefineds:[{content:1,predefined:!0,x:0,y:0},{content:1,predefined:!0,x:3,y:0},{content:1,predefined:!0,x:4,y:1},{content:2,predefined:!0,x:6,y:1},{content:2,predefined:!0,x:7,y:1},{content:2,predefined:!0,x:4,y:2},{content:2,predefined:!0,x:1,y:3},{content:1,predefined:!0,x:5,y:3},{content:1,predefined:!0,x:7,y:3},{content:2,predefined:!0,x:1,y:4},{content:1,predefined:!0,x:4,y:5},{content:1,predefined:!0,x:7,y:5},{content:2,predefined:!0,x:2,y:6},{content:1,predefined:!0,x:0,y:7},{content:2,predefined:!0,x:6,y:7}]},{predefineds:[{content:1,predefined:!0,x:0,y:0},{content:2,predefined:!0,x:4,y:0},{content:2,predefined:!0,x:2,y:1},{content:1,predefined:!0,x:6,y:1},{content:2,predefined:!0,x:0,y:2},{content:2,predefined:!0,x:3,y:2},{content:2,predefined:!0,x:1,y:3},{content:1,predefined:!0,x:4,y:3},{content:1,predefined:!0,x:6,y:3},{content:1,predefined:!0,x:3,y:5},{content:1,predefined:!0,x:6,y:6},{content:1,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:2,y:7},{content:2,predefined:!0,x:4,y:7},{content:2,predefined:!0,x:5,y:7}]},{predefineds:[{content:2,predefined:!0,x:1,y:0},{content:1,predefined:!0,x:2,y:0},{content:1,predefined:!0,x:4,y:0},{content:1,predefined:!0,x:6,y:0},{content:1,predefined:!0,x:0,y:1},{content:2,predefined:!0,x:3,y:1},{content:1,predefined:!0,x:6,y:1},{content:1,predefined:!0,x:1,y:3},{content:2,predefined:!0,x:4,y:3},{content:2,predefined:!0,x:5,y:3},{content:2,predefined:!0,x:1,y:4},{content:1,predefined:!0,x:7,y:4},{content:2,predefined:!0,x:0,y:5},{content:1,predefined:!0,x:5,y:5},{content:1,predefined:!0,x:2,y:6},{content:1,predefined:!0,x:7,y:6},{content:2,predefined:!0,x:0,y:7}]}]},{name:"10X10",x:10,y:10,color:"yellow",levels:[{predefineds:[{content:1,predefined:!0,x:2,y:0},{content:1,predefined:!0,x:6,y:0},{content:1,predefined:!0,x:6,y:1},{content:1,predefined:!0,x:7,y:1},{content:2,predefined:!0,x:1,y:2},{content:2,predefined:!0,x:5,y:3},{content:2,predefined:!0,x:7,y:3},{content:2,predefined:!0,x:1,y:4},{content:1,predefined:!0,x:2,y:4},{content:2,predefined:!0,x:9,y:4},{content:2,predefined:!0,x:4,y:6},{content:1,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:5,y:7},{content:1,predefined:!0,x:6,y:7},{content:1,predefined:!0,x:9,y:7},{content:2,predefined:!0,x:1,y:8},{content:2,predefined:!0,x:8,y:8},{content:2,predefined:!0,x:0,y:9},{content:2,predefined:!0,x:1,y:9},{content:2,predefined:!0,x:4,y:9}]},{predefineds:[{content:1,predefined:!0,x:5,y:0},{content:1,predefined:!0,x:3,y:1},{content:2,predefined:!0,x:4,y:1},{content:2,predefined:!0,x:8,y:1},{content:2,predefined:!0,x:0,y:2},{content:1,predefined:!0,x:6,y:2},{content:2,predefined:!0,x:4,y:3},{content:1,predefined:!0,x:8,y:3},{content:1,predefined:!0,x:1,y:4},{content:2,predefined:!0,x:7,y:4},{content:2,predefined:!0,x:6,y:5},{content:2,predefined:!0,x:8,y:5},{content:1,predefined:!0,x:1,y:6},{content:2,predefined:!0,x:3,y:6},{content:2,predefined:!0,x:5,y:6},{content:1,predefined:!0,x:7,y:7},{content:2,predefined:!0,x:6,y:8},{content:1,predefined:!0,x:8,y:8},{content:1,predefined:!0,x:2,y:9},{content:1,predefined:!0,x:4,y:9}]},{predefineds:[{content:1,predefined:!0,x:1,y:1},{content:2,predefined:!0,x:2,y:1},{content:1,predefined:!0,x:4,y:1},{content:2,predefined:!0,x:6,y:1},{content:1,predefined:!0,x:8,y:1},{content:2,predefined:!0,x:9,y:2},{content:1,predefined:!0,x:3,y:3},{content:1,predefined:!0,x:7,y:3},{content:1,predefined:!0,x:8,y:4},{content:2,predefined:!0,x:4,y:5},{content:1,predefined:!0,x:9,y:5},{content:2,predefined:!0,x:1,y:6},{content:2,predefined:!0,x:5,y:6},{content:1,predefined:!0,x:7,y:6},{content:2,predefined:!0,x:2,y:7},{content:1,predefined:!0,x:3,y:7},{content:2,predefined:!0,x:8,y:7},{content:1,predefined:!0,x:5,y:8},{content:2,predefined:!0,x:7,y:8},{content:2,predefined:!0,x:8,y:8},{content:2,predefined:!0,x:0,y:9}]},{predefineds:[{content:2,predefined:!0,x:0,y:0},{content:1,predefined:!0,x:4,y:0},{content:1,predefined:!0,x:6,y:0},{content:2,predefined:!0,x:0,y:1},{content:1,predefined:!0,x:5,y:1},{content:1,predefined:!0,x:9,y:1},{content:1,predefined:!0,x:1,y:2},{content:2,predefined:!0,x:7,y:2},{content:1,predefined:!0,x:1,y:3},{content:2,predefined:!0,x:9,y:3},{content:2,predefined:!0,x:5,y:4},{content:1,predefined:!0,x:7,y:4},{content:2,predefined:!0,x:9,y:4},{content:2,predefined:!0,x:4,y:5},{content:2,predefined:!0,x:1,y:6},{content:1,predefined:!0,x:9,y:7},{content:2,predefined:!0,x:4,y:8},{content:2,predefined:!0,x:3,y:9},{content:1,predefined:!0,x:8,y:9},{content:1,predefined:!0,x:9,y:9}]},{predefineds:[{content:1,predefined:!0,x:4,y:0},{content:2,predefined:!0,x:9,y:0},{content:1,predefined:!0,x:7,y:1},{content:2,predefined:!0,x:9,y:1},{content:1,predefined:!0,x:2,y:2},{content:1,predefined:!0,x:3,y:3},{content:2,predefined:!0,x:4,y:3},{content:1,predefined:!0,x:5,y:3},{content:1,predefined:!0,x:6,y:3},{content:2,predefined:!0,x:7,y:3},{content:1,predefined:!0,x:8,y:3},{content:2,predefined:!0,x:1,y:5},{content:2,predefined:!0,x:8,y:5},{content:2,predefined:!0,x:5,y:6},{content:2,predefined:!0,x:2,y:7},{content:1,predefined:!0,x:7,y:7},{content:2,predefined:!0,x:8,y:7},{content:1,predefined:!0,x:7,y:8},{content:1,predefined:!0,x:0,y:9},{content:2,predefined:!0,x:4,y:9}]},{predefineds:[{content:2,predefined:!0,x:5,y:0},{content:1,predefined:!0,x:7,y:1},{content:1,predefined:!0,x:1,y:2},{content:2,predefined:!0,x:4,y:2},{content:1,predefined:!0,x:7,y:2},{content:1,predefined:!0,x:3,y:3},{content:1,predefined:!0,x:2,y:4},{content:2,predefined:!0,x:8,y:4},{content:2,predefined:!0,x:9,y:4},{content:1,predefined:!0,x:2,y:5},{content:2,predefined:!0,x:5,y:5},{content:2,predefined:!0,x:9,y:6},{content:2,predefined:!0,x:1,y:7},{content:1,predefined:!0,x:5,y:7},{content:1,predefined:!0,x:6,y:7},{content:1,predefined:!0,x:8,y:7},{content:2,predefined:!0,x:5,y:8},{content:2,predefined:!0,x:1,y:9},{content:1,predefined:!0,x:6,y:9},{content:2,predefined:!0,x:9,y:9}]},{predefineds:[{content:1,predefined:!0,x:1,y:0},{content:2,predefined:!0,x:5,y:0},{content:1,predefined:!0,x:1,y:1},{content:2,predefined:!0,x:6,y:1},{content:2,predefined:!0,x:1,y:2},{content:2,predefined:!0,x:8,y:2},{content:2,predefined:!0,x:9,y:2},{content:1,predefined:!0,x:6,y:3},{content:1,predefined:!0,x:2,y:4},{content:1,predefined:!0,x:4,y:4},{content:2,predefined:!0,x:8,y:4},{content:1,predefined:!0,x:3,y:5},{content:1,predefined:!0,x:6,y:6},{content:2,predefined:!0,x:0,y:7},{content:2,predefined:!0,x:2,y:7},{content:1,predefined:!0,x:9,y:7},{content:2,predefined:!0,x:1,y:8},{content:1,predefined:!0,x:4,y:8},{content:1,predefined:!0,x:5,y:8},{content:2,predefined:!0,x:8,y:9}]}]},{name:"12X12",x:12,y:12,color:"red",levels:[{predefineds:[{content:1,predefined:!0,x:5,y:0},{content:2,predefined:!0,x:8,y:0},{content:1,predefined:!0,x:1,y:1},{content:1,predefined:!0,x:3,y:2},{content:2,predefined:!0,x:5,y:2},{content:2,predefined:!0,x:6,y:2},{content:1,predefined:!0,x:11,y:2},{content:1,predefined:!0,x:7,y:3},{content:2,predefined:!0,x:1,y:4},{content:1,predefined:!0,x:8,y:4},{content:2,predefined:!0,x:11,y:5},{content:1,predefined:!0,x:7,y:6},{content:2,predefined:!0,x:1,y:7},{content:1,predefined:!0,x:3,y:7},{content:2,predefined:!0,x:5,y:7},{content:2,predefined:!0,x:9,y:8},{content:2,predefined:!0,x:2,y:9},{content:2,predefined:!0,x:5,y:9},{content:1,predefined:!0,x:11,y:9},{content:1,predefined:!0,x:0,y:10},{content:2,predefined:!0,x:8,y:10},{content:1,predefined:!0,x:4,y:11},{content:2,predefined:!0,x:7,y:11},{content:1,predefined:!0,x:10,y:11}]},{predefineds:[{content:2,predefined:!0,x:0,y:0},{content:2,predefined:!0,x:1,y:0},{content:1,predefined:!0,x:11,y:0},{content:2,predefined:!0,x:7,y:1},{content:1,predefined:!0,x:11,y:1},{content:1,predefined:!0,x:2,y:3},{content:2,predefined:!0,x:5,y:3},{content:2,predefined:!0,x:9,y:4},{content:1,predefined:!0,x:1,y:5},{content:1,predefined:!0,x:7,y:5},{content:2,predefined:!0,x:3,y:6},{content:2,predefined:!0,x:4,y:6},{content:1,predefined:!0,x:11,y:6},{content:1,predefined:!0,x:5,y:7},{content:2,predefined:!0,x:6,y:7},{content:2,predefined:!0,x:8,y:7},{content:2,predefined:!0,x:9,y:7},{content:1,predefined:!0,x:9,y:9},{content:1,predefined:!0,x:0,y:10},{content:1,predefined:!0,x:3,y:10},{content:1,predefined:!0,x:8,y:10},{content:1,predefined:!0,x:0,y:11},{content:2,predefined:!0,x:10,y:11},{content:2,predefined:!0,x:11,y:11}]},{predefineds:[{content:1,predefined:!0,x:0,y:0},{content:2,predefined:!0,x:1,y:1},{content:2,predefined:!0,x:3,y:1},{content:2,predefined:!0,x:4,y:1},{content:2,predefined:!0,x:8,y:2},{content:1,predefined:!0,x:2,y:3},{content:1,predefined:!0,x:6,y:3},{content:2,predefined:!0,x:9,y:3},{content:1,predefined:!0,x:1,y:4},{content:1,predefined:!0,x:4,y:4},{content:2,predefined:!0,x:4,y:6},{content:2,predefined:!0,x:5,y:6},{content:1,predefined:!0,x:7,y:6},{content:2,predefined:!0,x:0,y:7},{content:1,predefined:!0,x:3,y:7},{content:1,predefined:!0,x:8,y:7},{content:1,predefined:!0,x:9,y:7},{content:2,predefined:!0,x:11,y:7},{content:1,predefined:!0,x:4,y:9},{content:2,predefined:!0,x:6,y:9},{content:1,predefined:!0,x:10,y:9},{content:2,predefined:!0,x:1,y:10},{content:1,predefined:!0,x:3,y:10},{content:2,predefined:!0,x:6,y:10},{content:1,predefined:!0,x:10,y:10}]},{predefineds:[{content:2,predefined:!0,x:6,y:0},{content:2,predefined:!0,x:11,y:0},{content:2,predefined:!0,x:3,y:1},{content:2,predefined:!0,x:4,y:2},{content:2,predefined:!0,x:5,y:2},{content:1,predefined:!0,x:7,y:2},{content:1,predefined:!0,x:8,y:2},{content:1,predefined:!0,x:1,y:3},{content:1,predefined:!0,x:11,y:3},{content:2,predefined:!0,x:8,y:4},{content:2,predefined:!0,x:9,y:4},{content:1,predefined:!0,x:3,y:5},{content:2,predefined:!0,x:11,y:5},{content:1,predefined:!0,x:1,y:6},{content:2,predefined:!0,x:6,y:6},{content:2,predefined:!0,x:7,y:6},{content:1,predefined:!0,x:9,y:6},{content:1,predefined:!0,x:7,y:8},{content:2,predefined:!0,x:2,y:9},{content:2,predefined:!0,x:0,y:10},{content:1,predefined:!0,x:4,y:10},{content:1,predefined:!0,x:5,y:10},{content:1,predefined:!0,x:7,y:10},{content:1,predefined:!0,x:9,y:10},{content:2,predefined:!0,x:11,y:10}]}]}],e.levelCount=0;for(var r=0;r<e.dificulties.length;r++)e.levelCount+=e.dificulties[r].levels.length;e.selectDificulty=function(e){n.path(e)},e.setDificulty=function(){for(var d=0,r=!1;!r&&d<e.dificulties.length;)if(e.dificulties[d].name==t.dificulty){r=!0,e.currentLevel=e.dificulties[d];var o=JSON.parse(localStorage.getItem("complete"));if(o&&o[t.dificulty])for(var d=0;d<o[t.dificulty].length;d++)e.currentLevel.levels[o[t.dificulty][d]].done=!0}else d++;r||n.path("/")},e.selectLevel=function(e,t){n.path(e.name+"/"+t)},e.setupLevel=function(){e.board=[];for(var n=0,d=!1;!d&&n<e.dificulties.length;)e.dificulties[n].name==t.dificulty?(d=!0,e.currentLevel=e.dificulties[n]):n++;for(e.currentStage=e.currentLevel.levels[t.level-1],n=0;n<e.currentLevel.x;n++){e.board[n]=[];for(var r=0;r<e.currentLevel.y;r++)e.board[n][r]={content:0,predefined:!1}}for(n=0;n<e.currentStage.predefineds.length;n++)e.board[e.currentStage.predefineds[n].y][e.currentStage.predefineds[n].x]=e.currentStage.predefineds[n];e.coloredTiles=e.currentStage.predefineds.length},e.printBoard=function(e){for(var n=[],t=0;t<e.length;t++)for(var d=0;d<e.length;d++)0!=e[t][d].content&&n.push({content:e[t][d].content,predefined:!0,x:d,y:t});console.log(n.length,JSON.stringify(n))},e.color=function(d,r){if(!e.board[d][r].predefined)if(e.board[d][r].content++,e.board[d][r].content>2?(e.board[d][r].content=0,e.coloredTiles--):1==e.board[d][r].content&&e.coloredTiles++,e.printBoard(e.board),e.coloredTiles==e.currentLevel.x*e.currentLevel.y){if(e.verifyBoard(e.board)){e.currentStage.done=!0;var o=JSON.parse(localStorage.getItem("complete"));o||(o={}),o[t.dificulty]||(o[t.dificulty]=[]),o[t.dificulty].push(t.level-1),localStorage.setItem("complete",JSON.stringify(o)),n.path("/success")}}else{var i=e.verifyRowAndColumn(e.board,d,r);if(3==i)for(var c=0;c<e.board.length;c++)e.board[c][r].error=!0,e.board[d][c].error=!0;else if(2==i)for(var c=0;c<e.board.length;c++)e.board[d][c].error=!0,e.board[c][r].error=!1;else if(1==i)for(var c=0;c<e.board.length;c++)e.board[c][r].error=!0,e.board[d][c].error=!1;else for(var c=0;c<e.board.length;c++)e.board[c][r].error=!1,e.board[d][c].error=!1}},e.verifyRowAndColumn=function(e,n,t){for(var d=0,r=0,o=!1,i=0;i<e[n].length;i++)1==e[n][i].content?d++:2==e[n][i].content&&r++,d+r==e[n].length&&d!=r&&(o=!0);for(d=0,r=0,i=0;i<e.length;i++)if(1==e[i][t].content?d++:2==e[i][t].content&&r++,d+r==e.length&&d!=r)return o?3:1;return o?2:0},e.verifyBoard=function(n){for(var t=!0,d=0;d<n.length&&t;d++)t=t&&0==e.verifyRowAndColumn(n,d,d);for(var d=0;d<n.length-2&&t;d++)for(var r=0;r<n[d].length-2&&t;r++)t=t&&n[d][r].content!=n[d+1][r].content||n[d][r].content!=n[d+2][r].content,t=t&&n[d][r].content!=n[d][r+1].content||n[d][r].content!=n[d][r+2].content;for(var d=n.length-2;d<n.length&&t;d++)for(var r=0;r<n[d].length-2&&t;r++)t=t&&n[d][r].content!=n[d][r+1].content||n[d][r].content!=n[d][r+2].content;for(var d=0;d<n.length-2&&t;d++)for(var r=n[d].length-2;r<n[d].length&&t;r++)t=t&&n[d][r].content!=n[d+1][r].content||n[d][r].content!=n[d+2][r].content;return t},e.reveille=function(){var n=JSON.parse(localStorage.getItem("complete")),t=0;if(n)for(var r in n)t+=n[r].length;d(function(){e.completedCount={top:t/e.levelCount*100+"%"}},10)},e.homePage=function(){n.path("/")}}],xoxo.controller(controllers);