'use strict';

class MessagesNewController {
  constructor(msgStore) {
    this.text = '';
    this._msgStore = msgStore;
  }
  create() {
    console.log("COMING HERE with the text =", this.text) ;
    this._msgStore.add(this.text);
    this.text = '';
  }
}

export default angular
  .module('messages.new.controller', [
    require('commons/msg-store').name,
  ])
  .controller('MessagesNewController', MessagesNewController);
