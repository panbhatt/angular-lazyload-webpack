'use strict';

class UserService {
  constructor() {
    console.log("HELLO") ;
  }

  login(userName) {
    console.log("Trying to login with the name of the user = ", userName) ; 
  }
}

export default angular
  .module('user.service', [])
  .service('UserService', UserService);
