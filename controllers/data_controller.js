/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The CONTROLLER is always read first – it's like my normal JS file.
Handles any interaction with the user and taking data from the factory and presenting it back to user...
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     /*----------------------------------------------------------------------------------------------------------------------------------------------------
     Save all inventory data into an array...
     ------------------------------------------------------------------------------------------------------------------------------------------------------*/

     angular
          .module('nflCrimes')
          .controller('dataController', function(API, $state) {

               let vm = this;
               let promise = API.getArrestData();

               promise.then(function(returnedData) {
                    // console.log(returnedData);
                    buildChart(returnedData);
                    // vm.returnedData = returnedData.data;
               })
               
          var buyers = document.getElementById('myChart').getContext('2d');


//create function to actually render the chart
var buildChart = function (tacoData){
  // console.log(tacoData);
  var data = [];
  var labels = [];
  tacoData.data.forEach(function(item){
    labels.push(item.Category);
    data.push(item.arrest_count);
})
var myChart = new Chart(buyers, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Arrests',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

          })




})();
