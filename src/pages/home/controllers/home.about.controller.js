'use strict';

class HomeAboutController {
  constructor(UserService,$scope,$location) {
    this._userService = UserService ;
    this._scope = $scope;
    this._scope.hitText = "Pankaj Bhatt" ;
  }

  hitMe(uName) {
    this._userService.login(uName) ;
  }
}

export default angular
  .module('home.about.controller', [
      require('pages/services/user.service').name,

  ])
  .controller('HomeAboutController', HomeAboutController);
