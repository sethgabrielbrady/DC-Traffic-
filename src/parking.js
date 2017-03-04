
// MOVING.js
// should export a single function which accepts a year and month name
//    (not a filename) as its arguments. The function must return an object with
//    the answers to the data analysis questions below.


let output = require('./parse.js');


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


/****************************************************************************/
console.log(ticketTypes);




let tempNumCont=0;
let tempNameCont = '';
let mostTixObj= {
      ViolationType: '',
      count: 0
    };

for (i=0; i<(ticketKeys.length); i++){
  // console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//
    if (ticketTypes[ticketKeys[i]] >= tempNumCont){
      // console.log(tempNameCont + ':' +  tempNumCont);
      tempNumCont = ticketTypes[ticketKeys[i]];//property
      tempNameCont = ticketKeys[i];//key
    }

    mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
    mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
}
console.log(mostTixObj);
/*****************************************************************************/

//I might need to change to violation to somehting more readable.


  // return answersObj
}

parkingViolations();
