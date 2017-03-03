
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

// console.log(ticketTypes);//this logs the correct nubmer of ticket types
let ticketKeys = Object.keys(ticketTypes);//outputs the number of properties in an objects
// console.log(ticketKeys);//this lof the correct number of ticketslogq

// console.log(ticketKeys[2]);//this returns the key  at index 2
// console.log(ticketTypes.P302);
// console.log(ticketTypes[ticketKeys[2]]); // this returns the property at that key

// i need to go through each ticket using a for loop, comparing the values, and
// storing the highest value inside a teporary variable.

let tempNumCont=1;
let tempNameCont = 0;
let mostTixObj= {
      ViolationType: '',
      count: 0
    };
for (i=0; i<(ticketKeys.length); i++){
  console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//this returns the ticket keys
    if (tempNumCont <= ticketTypes[ticketKeys[i]] ){
      console.log(tempNameCont + ':' +  tempNumCont);
      tempNumCont++;
      tempNameCont = ticketKeys[i];
    }

    mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
    mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
}
console.log(mostTixObj);






  // return answersObj
}

parkingViolations();

// I need to check all properties of an object and find out which one has the highest value
//
