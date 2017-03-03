



// MOVING.js
// should export a single function which accepts a year and month name
//    (not a filename) as its arguments. The function must return an object with
//    the answers to the data analysis questions below.


let output = require('./parse.js');
let movingDC = output();
// console.log (movingDC);


//I need get get the function to accept a file name
function movingViolations(/*year, monthName*/){
  // console.log(movingDC);
  let movingArray =[];

  //  How many different types of parking tickets were issued?
  //  this is index9(violation code)
  //  will need to sort throught the array (mainArray, at every inner array,
  //  at index 9),

  valueIndex = movingDC[0];
  // console.log(valueIndex);//logs out index 0
  console.log(valueIndex);


  for(j=0; j<valueIndex.length; j++){








  // return answersObj
}

movingViolations();

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
