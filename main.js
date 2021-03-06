(() => {
     'use strict';
     /*----------------------------------------------------------------------------------------------------------------------------------------------------
     Include this – ui.router – dependency at the top level...
     ------------------------------------------------------------------------------------------------------------------------------------------------------*/

     angular
          .module('nflCrimes', ['ui.router'])
          .config(appConfig);
     /*----------------------------------------------------------------------------------------------------------------------------------------------------
     The config block of our angular module always executes before our controllers and services are instantiated 
     and data is bound to our page. This is where we would do any mandatory configuration of our module.    
     ------------------------------------------------------------------------------------------------------------------------------------------------------*/

     appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

     function appConfig($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/')

          $stateProvider
               .state('home', {
                    url: '/',
                    templateUrl: 'partials/chart.html',
                    controller: 'dataController',
                    controllerAs: 'controller'
               })
     }
})();
