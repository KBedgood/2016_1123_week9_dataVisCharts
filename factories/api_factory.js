/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The FACTORY manipulates data (adding / deleting to array, marking as complete...)
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     angular
          .module('nflCrimes')
          .factory('API', function($http) {

               // Get Data
               const getArrestData = function() {
                    var arrestData = $http({
                         method: 'GET',
                         url: 'http://NflArrest.com/api/v1/crime?limit=5'
                    });
                    return arrestData;
               }

     

               return {
                    getArrestData,
               }
          });

})();
