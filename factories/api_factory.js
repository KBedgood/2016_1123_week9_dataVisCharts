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
          .module('crimeChicago')
          .factory('API', function($http) {

               // Get Data
               const getChicagoData = function() {
                    var crimeData = $http({
                         method: 'GET',
                         url: 'https://data.cityofchicago.org/resource/6zsd-86xi.json'
                    });
                    return crimeData;
               }

     

               return {
                    getChicagoData,
               }
          });

})();
