angular.module("myMod",[])
	.controller("myCtrl", function ($scope, $interval){
	$scope.Heading ="Silly Worlds";
	$scope.randomWords =[
		"Hello",
		"Random",
		"Words",
		"Oops"
	];

	$scope.randomPhrasess =[
		"Hello World!",
		"Random Phrases!",
		"Worlds Apart!",
		"One Life to Live!"
	];
	
	$scope.randomClass=[
	"red ",
	"blue ",
	"size ",
	"newfont ",
	"underline "

	];
	$scope.wordsOnPage = [];
	
	$scope.talk = function(){
		var functions = [addUndecoratedWord, addDecoratedWord, addPhrase];
		function rando(){
		return functions[Math.floor(Math.random() * functions.length)]();
	};
		$interval(rando, 500, 10);
	}
	function addUndecoratedWord() {
		var newElement = {}
		newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
		newElement.decor="";
		$scope.wordsOnPage.push(newElement);
	}
	function addDecoratedWord(){
		var newElement = {}
		newElement.word = $scope.randomWords[Math.floor(Math.random() * $scope.randomWords.length)];
		newElement.decor= $scope.randomClass[Math.floor(Math.random() * $scope.randomClass.length)];
		$scope.wordsOnPage.push(newElement);

	}
	function addPhrase() {
		var newElement ={}
		newElement.word = $scope.randomPhrasess[Math.floor(Math.random()* $scope.randomPhrasess.length)];
		newElement.decor = $scope.randomClass[Math.floor(Math.random()*$scope.randomClass.length)];
		$scope.wordsOnPage.push(newElement);
	}



	

});