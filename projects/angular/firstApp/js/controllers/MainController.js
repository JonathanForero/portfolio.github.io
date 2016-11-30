app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'Top Sellers of The Month';
  $scope.promo = 'Promotions';
  $scope.products = 
   [
    {    
      name: 'The Last Of Us',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/The-Last-of-Us-Remastered-Cover.jpg',
      likes: 0,
      dislikes: 0
  	},
    {    
      name: 'Game Of Thrones', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/game-of-thrones-xbox-one-front-cover.jpg',
      likes: 0,
      dislikes: 0
  	},
    {    
      name: 'Forza Horizon 3',
      price: 60,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/forza-horizon-3-cover-art.jpg',
      likes: 0,
      dislikes: 0
  	},
    {    
      name: 'BloodBorne', 
      price: 10, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/blood.jpg',
      likes: 0,
      dislikes: 0
  	}
   ];
  
  $scope.plusOne = function(index){
    $scope.products[index].likes += 1;
  };
  
  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1;
  };
}]);