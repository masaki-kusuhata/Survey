/**
 * Contact Components module.
 *
 * @module Survey.components.contact
 */
(function () {
  'use strict';

  angular
    .module('Survey.components.contact', [])
    .controller('ContactController', ContactController);

  ContactController.$inject = [];

  /**
   * ContactController
   *
   * @class ContactController
   * @constructor
   */
  function ContactController() {
    console.log('ContactController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ContactController.prototype.activate = function() {
    console.log('ContactController activate Method');
    vm = this;
    vm.case1 = 20;
    someMethod();
  };

  /**
   * @property vm
   * @private
   */
  var vm;

  /**
   * @method someMethod
   * @private
   */
  var someMethod = function () {
    vm.case2 = 10;
  };
})();
