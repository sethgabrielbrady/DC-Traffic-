



// MOVING.js
// should export a single function which accepts a year and month name
//    (not a filename) as its arguments. The function must return an object with
//    the answers to the data analysis questions below.


let output = require('./parse.js');


//I need get get the function to accept a file name
function movingViolations(/*year, monthName*/){
let movingDC = output('./traffic-data/simple_data/moving_jan_2016.csv');
// console.log(movingDC.length);



let ticketTypes = {};
movingDC.forEach(function moving(ticket) {
  console.log( ticket[17] );
   if (ticketTypes[ticket[17]] >=1){
        ticketTypes[ticket[17]] = ticketTypes[ticket[17]] + 1;
       }else {
           ticketTypes[ticket[17]] = 1;
          }
        });
// why is this NOT adding the correct amount to the array?
// console.log(ticketTypes);//this logs the correct nubmer of ticket types
let ticketKeys = Object.keys(ticketTypes);//outputs the number of properties in an objects


console.log(ticketTypes);
// console.log('this is the ticket key length', ticketKeys.length);



//
// let tempNumCont=0;
// let tempNameCont = '';
// let mostTixObj= {
//       ViolationType: '',
//       count: 0
//     };
//
// for (i=0; i<(ticketKeys.length); i++){
//   // console.log(ticketKeys[i] + ':' + ticketTypes[ticketKeys[i]]);//
//     if (ticketTypes[ticketKeys[i]] >= tempNumCont){
//       // console.log(tempNameCont + ':' +  tempNumCont);
//       tempNumCont = ticketTypes[ticketKeys[i]];//property
//       tempNameCont = ticketKeys[i];//key
//     }
//
//     mostTixObj.ViolationType = tempNameCont;//stores tempNameCont inside mostTixObj
//     mostTixObj.count = tempNumCont;//stores tempNumCont inside mostTixObj
// }
// console.log(mostTixObj);
//





  // return answersObj
}

movingViolations();

//
//       What was the most common violation type for a moving violation?
//       What state license plate gets the most tickets?
//       What is the average fine amount?
//       What was the total income from photo citations (tickettype = "Photo")?
//       What was the total income from all moving violations?
