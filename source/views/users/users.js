'use strict';

angular.module('thor')
.controller('UsersCtrl', function($scope, $state, User){
  console.log('user ctrl online');
  
  $scope.name = $state.current.name.split('.')[1];
  
  $scope.submit = function(user){
    User.register(user)
    .then(function(){
      $state.go('home');
    }).catch(function(err){
      console.log(err);
    });
  };
  
  $scope.oauth = function(provider){
    User.oauth(provider)
    .then(function(){
      $state.go('home');
    }).catch(function(err){
      console.log(err);
    });
  };
});
