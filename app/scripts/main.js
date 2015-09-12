/**
 * This is Survey module.
 *
 * @module Survey
 */
(function () {
  'use strict';

  angular
    .module('Survey', [
      'ngNewRouter',
      'Survey.config',
      'Survey.components.home',
      'Survey.components.about',
      'Survey.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main Survey
   * @constructor
   */
  function AppController () {}
})();
