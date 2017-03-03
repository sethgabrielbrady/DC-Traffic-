
// MOVING.js
// should export a single function which accepts a year and month name
//    (not a filename) as its arguments. The function must return an object with
//    the answers to the data analysis questions below.


let output = require('./parse.js');
//console.log (movingDC);


//How many different types of parking tickets were issued? DONEish
function parkingViolations(/*year, monthName*/){
    let parkingDC = output('./traffic-data/simple_data/parking_feb_2016.csv');

    let ticketTypes = {};
    parkingDC.forEach(function parking(ticket) {
      // console.log( ticket[9] );
      if (ticketTypes[ticket[9]] >= 1){
            ticketTypes[ticket[9]] = ticketTypes[ticket[9]] + 1;
          }else {
              ticketTypes[ticket[9]] = 1;
              }
            });

console.log(ticketTypes);//this logs the correct nuber of ticket types
let ticketCount = Object.keys(ticketTypes).length;//outputs the number of properties in an objects
console.log(ticketCount);







  // return answersObj
}

parkingViolations();

// THE ANALYSIS REQUIRED
//
//       For any given year and month of parking data, provide the following analysis:
//
//       How many different types of parking tickets were issued?
//       What was the most common violation type for a parking ticket?
//       What state license plate gets the most tickets?
//       For any given year and month of moving violation data, provide the following:
//
//       What was the most common violation type for a moving violation?
//       What state license plate gets the most tickets?
//       What is the average fine amount?
//       What was the total income from photo citations (tickettype = "Photo")?
//       What was the total income from all moving violations?
