'use strict';

class HomeController {
  constructor(UserService) {
      console.log("COMING IN USER SERVICE ") ; 
  }
}

export default angular
  .module('home.controller', [
    require('pages/services/user.service').name,
  ])
  .controller('HomeController', HomeController);
