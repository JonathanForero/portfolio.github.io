app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'img/move.jpg', 
	    title: 'The Hunter\'s Solitude', 
	    developer: 'Add On', 
	    price: 0.99 
	  }, 
	  { 
	    icon: 'img/shutterbugg.jpg', 
	    title: 'Beast\'s Arrives', 
	    developer: 'Pack', 
	    price: 2.99 
	  },
	  {
	    icon: 'img/gameboard.jpg',
	    title: 'Blood Hunter Kit',
	    developer: 'Plug-in',
	    price: 1.99
	  },
	  {
	    icon: 'img/forecast.jpg',
	    title: 'The Old Hunters',
	    developer: 'Expansion',
	    price: 1.99
	  }
	];
}]);